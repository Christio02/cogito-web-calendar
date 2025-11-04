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
            className="mb-4 flex flex-wrap gap-4"
            role="list"
            aria-label="Calendar legend"
        >
            {eventTypes.map((type) => {
                return (
                    <div
                        key={type.key}
                        role="listitem"
                        className="flex items-center gap-2"
                    >
                        <div className={`h-3 w-3 rounded-sm ${type.color}`} />
                        <span className="text-lg text-muted-foreground">
                            {type.label} ({eventTypeCountMap[type.key] ?? 0})
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
