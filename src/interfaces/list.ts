import { EventType } from "./event";

export type TimeWindowType = "upcoming" | "thisMonth" | "all";

export interface ListControlsProps {
    searchTerm: string;
    type: EventType | "all";
    timeWindow: TimeWindowType;
    sortBy: "date" | "name";
    onSearchChange: (searchTerm: string) => void;
    onTypeChange: (type: EventType | "all") => void;
    onTimeWindowChange: (preset: "upcoming" | "thisMonth" | "all") => void;
    onSortChange: (sortBy: "date" | "name") => void;
    onReset: () => void;
}
