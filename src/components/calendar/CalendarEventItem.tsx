import { CalendarEventItemProps } from "../../interfaces/event";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export default function CalendarEventItem({
    name,
    color,
    isSingle,
}: CalendarEventItemProps) {
    return (
        <HoverCard>
            <HoverCardTrigger
                className={`${isSingle ? "block w-full h-full text-pretty" : ""} `}
                asChild
            >
                <Button
                    aria-label={`${name}`}
                    className={`${color} ${isSingle ? "h-full" : ""} w-full min-w-0 justify-start text-left`}
                >
                    <span
                        className={[
                            "block flex-1 min-w-0",
                            isSingle
                                ? "whitespace-normal break-words" // multi-line wrap
                                : "truncate", // single-line ellipsis
                        ].join(" ")}
                    >
                        {name}
                    </span>
                </Button>
            </HoverCardTrigger>
        </HoverCard>
    );
}
