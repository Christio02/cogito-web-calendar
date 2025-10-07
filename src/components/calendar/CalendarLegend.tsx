

export type EventType =
  | "workshop"
  | "nyhet"
  | "hackathon"
  | "blogpost"
  | "møte"
  | "annet";

export const eventTypes: { key: EventType; label: string; color: string }[] = [
  { key: "workshop",  label: "Workshop",  color: "bg-green-500" },
  { key: "nyhet",     label: "Nyhet",     color: "bg-blue-500" },
  { key: "hackathon", label: "Hackathon", color: "bg-purple-500" },
  { key: "blogpost",  label: "Bloggpost", color: "bg-orange-500" },
  { key: "møte",      label: "Møte",      color: "bg-red-500" },
  { key: "annet",     label: "Annet",     color: "bg-gray-400" },
];

type CalendarLegendProps = {
  eventType?: EventType;   
  className?: string;      
};

export default function CalendarLegend({ eventType, className = "" }: CalendarLegendProps) {
  return (
    
    <div className={`flex flex-wrap items-center gap-4 ${className}`} role="list" aria-label="Kalenderforklaring">
      {eventTypes.map((t) => {
        const isSelected = eventType === t.key;
        return (
          
          <div
            key={t.key}
            role="listitem"
            className={`flex items-center gap-2 ${isSelected ? "font-medium" : ""}`}
          >
            {}
            <span
              aria-hidden
              className={`inline-block w-3 h-3 rounded-full ${t.color} ${isSelected ? "ring-2 ring-black" : ""}`}
            />
            <span className="text-sm text-gray-900">{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}
