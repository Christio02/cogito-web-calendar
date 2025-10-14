import { Event, EventType } from "@/interfaces/event";
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const eventTypes: { key: EventType; label: string; color: string }[] = [
  { key: "workshop", label: "Workshop", color: "bg-green-500" },
  { key: "nyhet", label: "Nyhet", color: "bg-blue-500" },
  { key: "hackathon", label: "Hackathon", color: "bg-purple-500" },
  { key: "blogpost", label: "Bloggpost", color: "bg-orange-500" },
  { key: "møte", label: "Møte", color: "bg-red-500" },
  { key: "annet", label: "Annet", color: "bg-gray-400" },
];

export function getCalendarDays(year: number, month: number) {
  const monthStart = startOfMonth(new Date(year, month));
  const monthEnd = endOfMonth(monthStart);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  return days.map((date) => ({
    date,
    isCurrentMonth: isSameMonth(date, monthStart),
  }));
}

export function getEventColor(eventType: EventType): string | undefined {
  return eventTypes.find((type) => type.key === eventType)?.color;
}
