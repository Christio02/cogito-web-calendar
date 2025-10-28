import { CalendarEventItemProps } from "../../interfaces/event";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CalendarEventItem({
    id,
    name,
    time,
    location,
    color,
    isSingle,
}: CalendarEventItemProps) {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/events/${id}`);
    };

    return (
        <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger
                className={`${isSingle ? "block w-full h-full text-pretty" : ""} `}
                asChild
            >
                <Button
                    aria-label={`${name}`}
                    className={`${color} ${isSingle ? "h-full" : ""} w-full min-w-0 justify-start text-left`}
                    onClick={handleNavigation}
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
            <HoverCardContent
                className="w-auto min-w-[200px] max-w-md"
                color="blue"
            >
                <ul className="flex flex-col gap-3 coltext-lg">
                    <li className="font-bold">{name}</li>
                    <li className="flex flex-row gap-4">
                        <span>
                            <Clock />
                        </span>
                        {time}
                    </li>
                    <li className="flex flex-row gap-4">
                        <span>
                            <MapPin />
                        </span>
                        {location}
                    </li>
                </ul>
            </HoverCardContent>
        </HoverCard>
    );
}
