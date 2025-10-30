import { User } from "@/interfaces/user";
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
    atendees: User[];
}

export interface CalendarEventItemProps {
    id: number;
    name: string;
    time: string;
    location: string;
    color: string;
    isSingle?: boolean;
}
