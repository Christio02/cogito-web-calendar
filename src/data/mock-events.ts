import { CalendarEventItemProps, Event, EventType } from "@/interfaces/event";
import { getEventColor } from "@/lib/calendar/calendar-helpers";

export const mockEvents: Event[] = [
    {
        id: 1,
        name: "React Workshop: Avanserte Hooks",
        date: new Date(2025, 9, 15),
        time: "09:00 - 16:00",
        type: "workshop" as EventType,
        location: "Cogito Kontoret, Rom 301",
        description:
            "En heldag workshop hvor vi dykker dypt inn i React hooks. Vi dekker useState, useEffect, useContext, og lager egne custom hooks.",
        maxAtendees: 25,
        atendees: ["Ole Hansen", "Kari Nordmann", "Per Jensen"],
    },
    {
        id: 2,
        name: "Ny versjon av AI-platformen lansert",
        date: new Date(2025, 9, 17), // October 17, 2025
        time: "10:00",
        type: "nyhet" as EventType,
        location: "Online",
        description:
            "Vi er stolte av å annonsere versjon 2.0 av vår AI-plattform med forbedret maskinlæring og nye integrasjoner.",
        maxAtendees: 0,
        atendees: [],
    },
    {
        id: 3,
        name: "Halloween Hackathon 2025",
        date: new Date(2025, 9, 31), // October 31, 2025
        time: "18:00 - 23:59",
        type: "hackathon" as EventType,
        location: "Cogito Hovedkontor",
        description:
            "Bli med på vår årlige Halloween Hackathon! Bygg noe skummelt, morsomt eller innovativt på 6 timer. Pizza og drikke inkludert!",
        maxAtendees: 50,
        atendees: [
            "Emma Larsen",
            "Lucas Berg",
            "Sofia Eriksen",
            "Noah Pedersen",
            "Mia Andersen",
        ],
    },
    {
        id: 4,
        name: "Introduksjon til TypeScript",
        date: new Date(2025, 9, 20), // October 20, 2025
        time: "13:00 - 17:00",
        type: "workshop" as EventType,
        location: "Online via Teams",
        description:
            "Lær grunnleggende TypeScript: typer, interfaces, generics og hvordan du bruker det i eksisterende JavaScript-prosjekter.",
        maxAtendees: 30,
        atendees: ["Anders Johansen", "Ingrid Olsen"],
    },
    {
        id: 5,
        name: "Beste praksis for API-design",
        date: new Date(2025, 9, 22), // October 22, 2025
        time: "14:00",
        type: "blogpost" as EventType,
        location: "cogito.no/blog",
        description:
            "Ny bloggpost om RESTful API design, versjonering, autentisering og dokumentasjon. Inkluderer eksempler fra våre egne prosjekter.",
        maxAtendees: 0,
        atendees: [],
    },
    {
        id: 6,
        name: "Sprint Planning Q4",
        date: new Date(2025, 9, 18), // October 18, 2025
        time: "10:00 - 12:00",
        type: "møte" as EventType,
        location: "Møterom A",
        description:
            "Planleggingsmøte for Q4 sprint. Vi går gjennom backlog, prioriterer features og setter mål for neste sprint.",
        maxAtendees: 12,
        atendees: [
            "Team Lead Anna",
            "Developer Lars",
            "Designer Maria",
            "PO Henrik",
        ],
    },
    {
        id: 7,
        name: "Tech Talk: Microservices vs Monolith",
        date: new Date(2025, 9, 25), // October 25, 2025
        time: "15:00 - 16:00",
        type: "annet" as EventType,
        location: "Auditorium",
        description:
            "En åpen diskusjon om fordeler og ulemper med microservices arkitektur sammenlignet med monolittiske applikasjoner.",
        maxAtendees: 100,
        atendees: ["Erik Svendsen", "Julie Hansen", "Martin Bakke"],
    },
    {
        id: 8,
        name: "Next.js 15 - Hva er nytt?",
        date: new Date(2025, 9, 28), // October 28, 2025
        time: "12:00",
        type: "blogpost" as EventType,
        location: "cogito.no/blog",
        description:
            "Vi utforsker de nye funksjonene i Next.js 15: forbedret caching, Turbopack, og oppdateringer til App Router.",
        maxAtendees: 0,
        atendees: [],
    },
    {
        id: 9,
        name: "AI & Machine Learning Hackathon",
        date: new Date(2025, 10, 8), // November 8, 2025
        time: "09:00 - 21:00",
        type: "hackathon" as EventType,
        location: "Innovation Lab",
        description:
            "12-timers hackathon fokusert på AI og maskinlæring. Bygg modeller, optimaliser algoritmer, og vis frem dine ferdigheter!",
        maxAtendees: 40,
        atendees: ["AI-entusiast Sarah", "Data Scientist Tom"],
    },
    {
        id: 10,
        name: "Docker & Kubernetes Workshop",
        date: new Date(2025, 10, 12), // November 12, 2025
        time: "10:00 - 15:00",
        type: "workshop" as EventType,
        location: "Cogito Kontoret, Rom 201",
        description:
            "Praktisk workshop om containerisering med Docker og orkestrering med Kubernetes. Ta med egen laptop.",
        maxAtendees: 20,
        atendees: ["DevOps Engineer Kim", "Backend Dev Alex"],
    },
    {
        id: 11,
        name: "Ny sikkerhetspolicy implementert",
        date: new Date(2025, 9, 21), // October 21, 2025
        time: "08:00",
        type: "nyhet" as EventType,
        location: "Alle lokasjoner",
        description:
            "Viktig: Ny sikkerhetspolicy trer i kraft. Alle ansatte må oppdatere sine passord og aktivere to-faktor autentisering.",
        maxAtendees: 0,
        atendees: [],
    },
    {
        id: 12,
        name: "Månedlig All-Hands Meeting",
        date: new Date(2025, 9, 30), // October 30, 2025
        time: "14:00 - 15:30",
        type: "møte" as EventType,
        location: "Hovedkontoret / Teams",
        description:
            "Månedlig møte hvor ledelsen deler oppdateringer, Q4 resultater og planer for fremtiden. Q&A-sesjon inkludert.",
        maxAtendees: 200,
        atendees: ["Alle ansatte"],
    },
    {
        id: 13,
        name: "Testing i JavaScript: Jest vs Vitest",
        date: new Date(2025, 10, 5), // November 5, 2025
        time: "11:00",
        type: "blogpost" as EventType,
        location: "cogito.no/blog",
        description:
            "En sammenligning av populære testing frameworks for JavaScript. Ytelse, features og hvilken du bør velge for ditt prosjekt.",
        maxAtendees: 0,
        atendees: [],
    },
    {
        id: 14,
        name: "Team Building: Escape Room",
        date: new Date(2025, 10, 15), // November 15, 2025
        time: "16:00 - 19:00",
        type: "annet" as EventType,
        location: "Escape Room Oslo",
        description:
            "Sosial aktivitet for teamet! Vi tar escape room-utfordringen sammen, etterfulgt av middag på restaurant.",
        maxAtendees: 15,
        atendees: ["Team Alpha medlemmer"],
    },
    {
        id: 15,
        name: "CSS Grid & Flexbox Masterclass",
        date: new Date(2025, 10, 20), // November 20, 2025
        time: "13:00 - 17:00",
        type: "workshop" as EventType,
        location: "Online via Zoom",
        description:
            "Bli en mester i moderne CSS layout. Vi bygger responsive designs fra bunn med Grid og Flexbox.",
        maxAtendees: 35,
        atendees: ["Frontend utviklere"],
    },
    {
        id: 16,
        name: "Partnerskapsavtale med TechCorp signert",
        date: new Date(2025, 9, 24), // October 24, 2025
        time: "09:00",
        type: "nyhet" as EventType,
        location: "Pressemeldinger",
        description:
            "Cogito inngår strategisk partnerskap med TechCorp for å utvikle neste generasjons cloud-løsninger.",
        maxAtendees: 0,
        atendees: [],
    },
    {
        id: 17,
        name: "Workshop",
        date: new Date(2025, 9, 24), // October 24, 2025
        time: "09:00",
        type: "workshop" as EventType,
        location: "Gruva",
        description: "Cogito workshop",
        maxAtendees: 50,
        atendees: [],
    },
];

/**
 * Helper function to convert full event objects to CalendarEventItem DTOs
 * This creates a lightweight version with only the necessary fields for calendar display
 */
export function toCalendarEventItems(
    events: Event[],
): CalendarEventItemProps[] {
    return events.map((event) => ({
        id: event.id,
        name: event.name,
        type: event.type,
        time: event.time,
        location: event.location,
        color: getEventColor(event.type) ?? "bg-red-500",
    }));
}

/**
 * Get events for a specific date
 */
export function getEventsByDate(date: Date): Event[] {
    return mockEvents.filter(
        (event) =>
            event.date.getFullYear() === date.getFullYear() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getDate() === date.getDate(),
    );
}

/**
 * Get calendar event items (DTOs) for a specific date
 */
export function getCalendarEventItemsByDate(
    date: Date,
): CalendarEventItemProps[] {
    const events = getEventsByDate(date);
    return toCalendarEventItems(events);
}

/**
 * Get events for a specific month
 */
export function getEventsByMonth(year: number, month: number): Event[] {
    return mockEvents.filter(
        (event) =>
            event.date.getFullYear() === year &&
            event.date.getMonth() === month,
    );
}

/**
 * Get event by ID
 */
export function getEventById(id: number): Event | undefined {
    return mockEvents.find((event) => event.id === id);
}
