import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { EventType } from "@/interfaces/event";

type Value = EventType | "all";

export default function EventTypeSelect({
    value,
    onChange,
    availableTypes,
    label = "Type",
}: {
    value: Value;
    onChange: (next: Value) => void;
    availableTypes: EventType[]; // e.g. ["workshop","nyhet",...]
    label?: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
                {label}
            </span>
            <Select value={value} onValueChange={(v) => onChange(v as Value)}>
                <SelectTrigger className="w-56">
                    <SelectValue placeholder="Velg type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Alle</SelectItem>
                    {availableTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
