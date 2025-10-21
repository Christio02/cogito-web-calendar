"use client";
import { mockEvents } from "@/data/mock-events";
import {
    eventTypes,
    getCalendarDays,
    getEventColor,
} from "@/lib/calendar/calendar-helpers";
import { isSameDay, isToday } from "date-fns";
import { Event } from "../../interfaces/event";
import CalendarEventItem from "./CalendarEventItem";
import CalendarLegend from "./CalendarLegend";

export default function CalendarView({
    year,
    month,
}: {
    year: number;
    month: number;
}) {
    const day_labels = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
    const calendar_days = getCalendarDays(year, month);
    return (
        <>
            <section className="px-4">
                <CalendarLegend eventType="nyhet" />

                <div className="grid grid-cols-7 grid-auto-rows gap-px bg-gray-200 border border-gray-200">
                    {day_labels.map((day, i) => (
                        <div
                            className="mr-4 bg-gray-100 p-2 text-center font-semibold text-sm"
                            key={i}
                        >
                            {day}
                        </div>
                    ))}

                    {calendar_days.map((day, i) => {
                        // Filter events for this specific day
                        const dayEvents = mockEvents
                            .filter((event) => isSameDay(event.date, day.date))
                            .sort((a, b) => {
                                // 10:00 - 20:00
                                // 09:30 - 12:00
                                const timeA = a.time.split("-")[0].trim(); // 1000
                                const timeB = b.time.split("-")[0].trim(); // 0930

                                // Convert to comparable format (remove colon)
                                const numA = parseInt(timeA.replace(":", ""));
                                const numB = parseInt(timeB.replace(":", ""));

                                // 1000 - 0930
                                return numA - numB;
                            });

                        return (
                            <div
                                className={`bg-white border border-black min-h-24 p-1 flex flex-col focus-visible:ring ${
                                    !day.isCurrentMonth
                                        ? "opacity-40 bg-gray-50"
                                        : ""
                                } ${isToday(day.date) ? "ring-2 ring-blue-500" : ""} h-full`}
                                key={i}
                            >
                                <div className="font-bold text-sm mb-1 flex-none">
                                    {day.date.getDate()}
                                </div>

                                {dayEvents.length === 1 ? (
                                    <div className="flex-1">
                                        <CalendarEventItem
                                            key={dayEvents[0].id}
                                            id={dayEvents[0].id}
                                            name={dayEvents[0].name}
                                            color={
                                                getEventColor(
                                                    dayEvents[0].type,
                                                ) ?? "bg-red-500"
                                            }
                                            isSingle={true}
                                        />
                                    </div>
                                ) : (
                                    <div className="space-y-1 flex-none">
                                        {dayEvents.map((event) => {
                                            // find color of this event
                                            const color =
                                                getEventColor(event.type) ??
                                                "bg-red-500";

                                            return (
                                                <CalendarEventItem
                                                    key={event.id}
                                                    id={event.id}
                                                    name={event.name}
                                                    color={color}
                                                    isSingle={false}
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
