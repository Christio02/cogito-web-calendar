import { mockEvents } from "@/data/mock-events";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { nb } from "date-fns/locale";
import { getEventColor } from "@/lib/calendar/calendar-helpers";
import EventRegistrationButton from "@/components/events/EventRegistrationButton";
import { User } from "@/interfaces/user";

const eventTypeLabels: Record<string, string> = {
    workshop: "Workshop",
    nyhet: "Nyhet",
    hackathon: "Hackathon",
    blogpost: "Blogginnlegg",
    møte: "Møte",
    annet: "Annet",
};

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const eventId = Number.parseInt(id, 10);

    const event = mockEvents.find((e) => e.id === eventId);

    // mock, here should return current logged in user
    const user: User = {
        id: 1,
        name: "Test",
    };

    if (isNaN(eventId)) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-destructive mb-4">
                        Ugyldig Event ID
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        Event ID-formatet er ikke gyldig.
                    </p>
                    <Button asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Tilbake til kalender
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold text-destructive mb-4">
                        Event ikke funnet
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        Vi kunne ikke finne eventet du leter etter.
                    </p>
                    <Button asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Tilbake til kalender
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }

    const eventColor = getEventColor(event.type);
    const availableSpots =
        event.maxAtendees > 0
            ? event.maxAtendees - event.atendees.length
            : null;

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* back button to navigate back to calendar */}
                <Button variant="ghost" asChild className="mb-6">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Tilbake til kalender
                    </Link>
                </Button>

                {/* Event card */}
                <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    {/* header with event type */}
                    <div className="bg-muted/30 border-b border-border p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className={`${eventColor} text-white px-4 py-1.5 rounded-full text-sm font-semibold`}
                            >
                                {eventTypeLabels[event.type] || event.type}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                            {event.name}
                        </h1>
                    </div>

                    {/* details */}
                    <div className="p-6 space-y-6">
                        {/* date, time and location grid */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="flex items-start gap-3 bg-muted/20 p-4 rounded-lg border border-border">
                                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                                        Dato
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {format(event.date, "d. MMMM yyyy", {
                                            locale: nb,
                                        })}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-muted/20 p-4 rounded-lg border border-border">
                                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                                        Tid
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {event.time}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 bg-muted/20 p-4 rounded-lg border border-border">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                                        Sted
                                    </p>
                                    <p className="text-foreground font-medium">
                                        {event.location}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div className="bg-muted/20 p-6 rounded-lg border border-border">
                            <h2 className="text-xl font-bold text-foreground mb-3">
                                Beskrivelse
                            </h2>
                            <p className="text-foreground leading-relaxed text-pretty">
                                {event.description}
                            </p>
                        </div>

                        {/* atendees section */}
                        {event.maxAtendees > 0 && (
                            <div className="bg-muted/20 p-6 rounded-lg border border-border">
                                <div className="flex items-center gap-2 mb-4">
                                    <Users className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-bold text-foreground">
                                        Påmeldte deltakere
                                    </h2>
                                </div>

                                <div className="flex items-center gap-4 mb-4 text-sm">
                                    <EventRegistrationButton
                                        event={event}
                                        userData={user}
                                    />
                                    {availableSpots !== null && (
                                        <span
                                            className={`px-3 py-1 rounded-full font-medium ${
                                                availableSpots > 0
                                                    ? "bg-primary/10 text-primary"
                                                    : "bg-destructive/10 text-destructive"
                                            }`}
                                        >
                                            {availableSpots > 0
                                                ? `${availableSpots} plasser igjen`
                                                : "Fullt"}
                                        </span>
                                    )}
                                </div>

                                {event.atendees.length > 0 ? (
                                    <ul className="space-y-2">
                                        {event.atendees.map(
                                            (attendee, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                                                >
                                                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                                                        {attendee.name}
                                                    </div>
                                                    <span className="text-foreground font-medium">
                                                        {attendee.name}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : (
                                    <p className="text-muted-foreground italic">
                                        Ingen påmeldte ennå
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
