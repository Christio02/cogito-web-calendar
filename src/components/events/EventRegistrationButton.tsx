import { Event } from "@/interfaces/event";
import { User } from "@/interfaces/user";
import { Button } from "@/components/ui/button";

interface EventRegistrationButtonProps {
    event: Event;
    userData: User;
}

export default function EventRegistrationButton({
    event,
    userData,
}: EventRegistrationButtonProps) {
    const attendeeCount = event.atendees.length;
    const isRegistered = event.atendees.some((u) => u.id === userData.id);
    const eventIsFull = attendeeCount >= event.maxAtendees;

    const buttonLabel = isRegistered
        ? "Du er registrert"
        : eventIsFull
          ? "Fullt"
          : `Registrer deg (${attendeeCount} / ${event.maxAtendees} plasser)`;

    return (
        <section className="flex flex-col gap-2">
            <Button type="button" disabled={eventIsFull && !isRegistered}>
                {buttonLabel}
            </Button>
        </section>
    );
}
