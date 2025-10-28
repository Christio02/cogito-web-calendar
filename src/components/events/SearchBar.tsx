import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
    value: string;
    handleSearch: (value: string) => void;
}

export default function Searchbar({ value, handleSearch }: SearchBarProps) {
    const [localSearchTerm, setLocalSearchTerm] = useState(value);

    const [debouncedSearchTerm] = useDebounce(localSearchTerm, 300);

    // Sync with external value changes (e.g., reset)
    useEffect(() => {
        setLocalSearchTerm(value);
    }, [value]);

    useEffect(() => {
        handleSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm, handleSearch]);

    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
                Søk
            </span>
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    value={localSearchTerm}
                    onChange={(e) => {
                        setLocalSearchTerm(e.target.value);
                    }}
                    placeholder="Søk etter navn, beskrivelse eller sted..."
                    aria-label="Søk etter arrangementer"
                    className="pl-9 rounded-lg"
                />
            </div>
        </div>
    );
}
