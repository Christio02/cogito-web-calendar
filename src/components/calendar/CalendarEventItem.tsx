import { CalendarEventItemProps } from "../../interfaces/event";

export default function CalendarEventItem({
  id,
  name,
  color,
}: CalendarEventItemProps) {
  return (
    <div
      className={`${color} rounded px-1 py-0.5 text-xs text-white truncate cursor-pointer hover:opacity-80 transition-opacity`}
      title={name}
    >
      {name}
    </div>
  );
}
