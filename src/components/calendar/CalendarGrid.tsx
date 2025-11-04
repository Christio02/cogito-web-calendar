"use client";
import {
    getCalendarDays,
    getEventColor,
    getEventsForDay,
    sortEventsByTime,
} from "@/lib/calendar/calendar-helpers";
import { isToday } from "date-fns";
import { Event, EventType } from "../../interfaces/event";
import CalendarEventItem from "./CalendarEventItem";
import CalendarLegend from "./CalendarLegend";
import { isSameMonth } from "date-fns/fp";

export type EventTypeCountMap = Record<EventType, number>;

export default function CalendarGrid({
    year,
    month,
    events,
}: {
    year: number;
    month: number;
    events: Event[];
}) {
    const day_labels = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
    const calendar_days = getCalendarDays(year, month);

    const monthEvents = events.filter((event) =>
        isSameMonth(event.date, new Date(year, month)),
    );

    const mappedEventTypes: EventTypeCountMap = monthEvents
        .filter((event) => isSameMonth(event.date, new Date(year, month)))
        .reduce((accumulator: EventTypeCountMap, event: Event) => {
            const key: EventType = event.type;
            accumulator[key] = (accumulator[key] || 0) + 1;

            return accumulator;
        }, {} as EventTypeCountMap);

    return (
        <>
            <div className="w-full rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
                <CalendarLegend eventTypeCountMap={mappedEventTypes} />

                <div className="grid grid-cols-7 gap-2 ">
                    {day_labels.map((day, i) => (
                        <div
                            className="bg-muted/50 p-2 text-center font-semibold text-sm text-muted-foreground border-b border-border rounded-t-lg"
                            key={i}
                        >
                            {day}
                        </div>
                    ))}

                    {calendar_days.map((day, i) => {
                        // Filter events for this specific day
                        const dayEvents = sortEventsByTime(
                            getEventsForDay(monthEvents, day.date),
                        );

                        return (
                            <div
                                className={`bg-card border border-border rounded-lg min-h-24 p-2 flex flex-col
                                  transition-all duration-200 hover:shadow-md hover:border-primary/20 ${
                                      !day.isCurrentMonth
                                          ? "opacity-40 bg-muted/30"
                                          : ""
                                  } ${isToday(day.date) ? "ring-2 ring-primary bg-primary/5" : ""} h-full`}
                                key={i}
                            >
                                <div
                                    className={`
                                  font-semibold text-sm mb-1 flex-none
                                  ${isToday(day.date) ? "text-primary" : "text-foreground"}
                                `}
                                >
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
