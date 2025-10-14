export type EventType =
  | "workshop"
  | "nyhet"
  | "hackathon"
  | "blogpost"
  | "møte"
  | "annet";

export interface Event {
  id: number;
  name: string;
  date: Date;
  time: string;
  type: EventType;
  location: string;
  description: string;
  maxAtendees: number;
  atendees: string[];
}

export interface CalendarEventItemProps {
  id: number;
  name: string;
  type: string;
  color: string;
}
