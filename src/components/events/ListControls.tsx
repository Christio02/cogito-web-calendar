import Searchbar from "./SearchBar";
import EventTypeSelect from "./EventTypeSelect";
import WindowFilter from "./WindowFilter";
import SortSelect from "./SortSelect";
import { Button } from "@/components/ui/button";
import { EventType } from "@/interfaces/event";
import { TimeWindowType } from "@/interfaces/list";
import { RotateCcw } from "lucide-react";

const AVAILABLE_TYPES: EventType[] = [
    "workshop",
    "nyhet",
    "hackathon",
    "blogpost",
    "møte",
    "annet",
];

const AVAILABLE_TIMEWINDOW: TimeWindowType[] = ["upcoming", "thisMonth", "all"];

interface ListControlsProps {
    searchTerm: string;
    type: EventType | "all";
    timeWindow: TimeWindowType;
    sortBy: "date" | "name";
    onSearchChange: (term: string) => void;
    onTypeChange: (type: EventType | "all") => void;
    onTimeWindowChange: (preset: TimeWindowType) => void;
    onSortChange: (sortBy: "date" | "name") => void;
    onReset: () => void;
    resultCount?: number;
}

export default function ListControls({
    searchTerm,
    type,
    timeWindow,
    sortBy,
    onSearchChange,
    onTypeChange,
    onTimeWindowChange,
    onSortChange,
    onReset,
    resultCount,
}: ListControlsProps) {
    return (
        <div className="space-y-4">
            {/* desktop: single row layout */}
            <div className="hidden md:flex md:items-end md:gap-3">
                <div className="flex-1">
                    <Searchbar
                        value={searchTerm}
                        handleSearch={onSearchChange}
                    />
                </div>
                <EventTypeSelect
                    value={type}
                    onChange={onTypeChange}
                    availableTypes={AVAILABLE_TYPES}
                    label="Type"
                />
                <WindowFilter
                    value={timeWindow}
                    onChange={onTimeWindowChange}
                    availableWindow={AVAILABLE_TIMEWINDOW}
                    label="Tidsrom"
                />
                <SortSelect value={sortBy} onChange={onSortChange} />
                <Button
                    onClick={onReset}
                    variant="outline"
                    size="icon"
                    title="Tilbakestill filtre"
                    className="h-10 w-10"
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>
            </div>

            {/* mobile: stacked layout */}
            <div className="md:hidden space-y-3">
                <Searchbar value={searchTerm} handleSearch={onSearchChange} />
                <div className="grid grid-cols-2 gap-3">
                    <EventTypeSelect
                        value={type}
                        onChange={onTypeChange}
                        availableTypes={AVAILABLE_TYPES}
                        label="Type"
                    />
                    <WindowFilter
                        value={timeWindow}
                        onChange={onTimeWindowChange}
                        availableWindow={AVAILABLE_TIMEWINDOW}
                        label="Tidsrom"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex-1">
                        <SortSelect value={sortBy} onChange={onSortChange} />
                    </div>
                    <Button
                        onClick={onReset}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                    >
                        <RotateCcw className="h-4 w-4" />
                        Tøm
                    </Button>
                </div>
            </div>

            {resultCount !== undefined && (
                <div className="text-center text-sm text-muted-foreground">
                    {resultCount} arrangementer
                </div>
            )}
        </div>
    );
}
