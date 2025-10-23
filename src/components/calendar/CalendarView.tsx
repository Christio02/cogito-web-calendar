"use client";
import { mockEvents } from "@/data/mock-events";
import {
    eventTypes,
    getCalendarDays,
    getEventColor,
} from "@/lib/calendar/calendar-helpers";
import { isSameDay, isToday } from "date-fns";
import { Event, EventType } from "../../interfaces/event";
import CalendarEventItem from "./CalendarEventItem";
import CalendarLegend from "./CalendarLegend";
import { isSameMonth } from "date-fns/fp";

export type EventTypeCountMap = Record<EventType, number>;

export default function CalendarView({
    year,
    month,
}: {
    year: number;
    month: number;
}) {
    const day_labels = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
    const calendar_days = getCalendarDays(year, month);

    const mappedEventTypes: EventTypeCountMap = mockEvents
        .filter((event) => isSameMonth(event.date, new Date(year, month)))
        .reduce((accumulator: EventTypeCountMap, event: Event) => {
            const key: EventType = event.type;
            accumulator[key] = (accumulator[key] || 0) + 1;

            return accumulator;
        }, {} as EventTypeCountMap);

    return (
        <>
            <div className="px-4">
                <CalendarLegend eventTypeCountMap={mappedEventTypes} />

                <div className="grid grid-cols-7 grid-auto-rows bg-gray-200 ">
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
                        const dayEvents: Event[] = mockEvents
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
                                    // setCurrentEvent(dayEvents[0].type)
                                    <div className="flex-1">
                                        <CalendarEventItem
                                            key={dayEvents[0].id}
                                            id={dayEvents[0].id}
                                            name={dayEvents[0].name}
                                            time={dayEvents[0].time}
                                            location={dayEvents[0].location}
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
                                                    time={event.time}
                                                    location={event.location}
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
            </div>
        </>
    );
}
