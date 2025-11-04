import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { TimeWindowType } from "@/interfaces/list";

export default function WindowFilter({
    value,
    onChange,
    availableWindow,
    label = "TimeWindow",
}: {
    value: TimeWindowType;
    onChange: (next: TimeWindowType) => void;
    availableWindow: TimeWindowType[];
    label?: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-muted-foreground">
                {label}
            </span>
            <Select
                value={value}
                onValueChange={(v) => onChange(v as TimeWindowType)}
            >
                <SelectTrigger className="w-56">
                    <SelectValue placeholder="Choose Time window" />
                </SelectTrigger>
                <SelectContent>
                    {availableWindow.map((t) => (
                        <SelectItem key={t} value={t}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
