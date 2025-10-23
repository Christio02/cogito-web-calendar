import { mockEvents } from "@/data/mock-events";
import { Event } from "@/interfaces/event";

export default function Page() {
    // logikk her
    //
    // henter ut første event objekt (bare for å hjelpe med struktur og styling)
    const exampleEvent: Event = mockEvents[0];

    // access av attributter for exampleEvent
    const name = exampleEvent.name;
    // osv
    // Styling og html struktur her inne i return
    return (
        <section className="flex flex-col ">
            {/*>Flere html elementer og tailwind styling nedover her */}
        </section>
    );
}
