import EventListItem from "@/components/events/EventListItem";
import { mockEvents } from "@/data/mock-events";
import { Event } from "@/interfaces/event";

export default function Page() {
    const sortedEvents = [...mockEvents].sort(
        (a, b) => a.date.getTime() - b.date.getTime(),
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#13395b] to-[#1a4a7a] py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
                        Arrangementer
                    </h1>
                    <p className="text-white/80 text-lg">
                        Alle kommende workshops, møter og events
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4 text-white/70 text-sm">
                        <span>{sortedEvents.length} arrangementer</span>
                        <span>•</span>
                        <span>Sortert etter dato</span>
                    </div>
                </header>

                {/* Event List */}
                <section className="space-y-6">
                    {sortedEvents.map((event, index) => (
                        <EventListItem
                            key={event.id}
                            event={event}
                            index={index}
                        />
                    ))}
                </section>

                {/* Empty state (if no events) */}
                {sortedEvents.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-white/60 text-lg">
                            Ingen arrangementer funnet
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
