import { mockEvents } from "@/data/mock-events";
import { Event } from "@/interfaces/event";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const eventId = parseInt(id, 10);

    const event = mockEvents.find((e) => e.id === eventId);

    if (isNaN(eventId)) {
        return <div>Invalid Event ID format!</div>;
    } else if (!event) {
        return <div>Event not found!</div>;
    }
    // logikk her

    // access av attributter for exampleEvent
    // osv
    // Styling og html struktur her inne i return
    return (
        <section className="flex flex-col ">
            <h1>{event.name}</h1>
            {/*>Flere html elementer og tailwind styling nedover her */}
        </section>
    );
}
