import EventListItem from "@/components/events/EventListItem";
import { Event } from "@/interfaces/event";

export default function EventList({ events }: { events: Event[] }) {
    return (
        <div className="px-4">
            {events.length > 0 ? (
                <section className="space-y-6">
                    {events.map((event, index) => (
                        <EventListItem
                            key={event.id}
                            event={event}
                            index={index}
                        />
                    ))}
                </section>
            ) : (
                <div className="text-center py-20">
                    <p className="text-gray-500 text-lg">
                        Ingen arrangementer funnet
                    </p>
                </div>
            )}
        </div>
    );
}
