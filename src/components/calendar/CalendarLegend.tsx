import { EventType } from "@/interfaces/event";
import { eventTypes } from "@/lib/calendar/calendar-helpers";

type CalendarLegendProps = {
    eventType?: EventType;
    className?: string;
};

export default function CalendarLegend({
    eventType,
    className = "",
}: CalendarLegendProps) {
    return (
        <div
            className={`flex flex-wrap items-center gap-4 ${className}`}
            role="list"
            aria-label="Kalenderforklaring"
        >
            {eventTypes.map((type) => {
                const isSelected = eventType === type.key;
                return (
                    <div
                        key={type.key}
                        role="listitem"
                        className={`flex items-center gap-2 ${
                            isSelected ? "font-medium" : ""
                        }`}
                    >
                        {}
                        <span
                            aria-hidden
                            className={`inline-block w-3 h-3 rounded-full ${type.color} ${
                                isSelected ? "ring-2 ring-black" : ""
                            }`}
                        />
                        <span className="text-sm text-gray-900">
                            {type.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
