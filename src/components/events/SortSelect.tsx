import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type SortBy = "date" | "name";

export default function SortSelect({
    value,
    onChange,
    label = "Sorter",
}: {
    value: SortBy;
    onChange: (sortBy: SortBy) => void;
    label?: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
                {label}
            </span>
            <Select value={value} onValueChange={(v) => onChange(v as SortBy)}>
                <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Velg sortering" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="date">Dato</SelectItem>
                    <SelectItem value="name">Navn</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
