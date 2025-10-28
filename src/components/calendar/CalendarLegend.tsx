"use client";

import { EventType } from "@/interfaces/event";
import { eventTypes } from "@/lib/calendar/calendar-helpers";
import { EventTypeCountMap } from "./CalendarGrid";

type CalendarLegendProps = {
    className?: string;
    eventTypeCountMap: EventTypeCountMap;
};

export default function CalendarLegend({
    eventTypeCountMap,
    className = "",
}: CalendarLegendProps) {
    return (
        <div
            className={`flex flex-wrap items-center gap-4 ${className}`}
            role="list"
            aria-label="Calendar legend"
        >
            {eventTypes.map((type) => {
                return (
                    <div
                        key={type.key}
                        role="listitem"
                        className={`flex items-center gap-2 `}
                    >
                        <span
                            aria-hidden
                            className={`inline-block w-3 h-3 rounded-full ${type.color}`}
                        />
                        <span className="text-lg text-gray-900">
                            {type.label} ({eventTypeCountMap[type.key] ?? 0})
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
