import { CalendarEventItemProps, Event, EventType } from "@/interfaces/event";
import { getEventColor } from "@/lib/calendar/calendar-helpers";
import { getUserByName, mockUsers } from "./users-mock";
import { User } from "@/interfaces/user";

// Helper to get user or create placeholder
function getUser(name: string): User {
    return getUserByName(name) ?? { id: 0, name };
}

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
        atendees: [
            getUser("Ole Hansen"),
            getUser("Kari Nordmann"),
            getUser("Per Jensen"),
        ],
    },
    {
        id: 2,
        name: "Ny versjon av AI-platformen lansert",
        date: new Date(2025, 9, 17),
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
        date: new Date(2025, 9, 31),
        time: "18:00 - 23:59",
        type: "hackathon" as EventType,
        location: "Cogito Hovedkontor",
        description:
            "Bli med på vår årlige Halloween Hackathon! Bygg noe skummelt, morsomt eller innovativt på 6 timer. Pizza og drikke inkludert!",
        maxAtendees: 50,
        atendees: [
            getUser("Emma Larsen"),
            getUser("Lucas Berg"),
            getUser("Sofia Eriksen"),
            getUser("Noah Pedersen"),
            getUser("Mia Andersen"),
        ],
    },
    {
        id: 4,
        name: "Introduksjon til TypeScript",
        date: new Date(2025, 9, 20),
        time: "13:00 - 17:00",
        type: "workshop" as EventType,
        location: "Online via Teams",
        description:
            "Lær grunnleggende TypeScript: typer, interfaces, generics og hvordan du bruker det i eksisterende JavaScript-prosjekter.",
        maxAtendees: 30,
        atendees: [getUser("Anders Johansen"), getUser("Ingrid Olsen")],
    },
    {
        id: 5,
        name: "Beste praksis for API-design",
        date: new Date(2025, 9, 22),
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
        date: new Date(2025, 9, 18),
        time: "10:00 - 12:00",
        type: "møte" as EventType,
        location: "Møterom A",
        description:
            "Planleggingsmøte for Q4 sprint. Vi går gjennom backlog, prioriterer features og setter mål for neste sprint.",
        maxAtendees: 12,
        atendees: [
            getUser("Team Lead Anna"),
            getUser("Developer Lars"),
            getUser("Designer Maria"),
            getUser("PO Henrik"),
        ],
    },
    {
        id: 7,
        name: "Tech Talk: Microservices vs Monolith",
        date: new Date(2025, 9, 25),
        time: "15:00 - 16:00",
        type: "annet" as EventType,
        location: "Auditorium",
        description:
            "En åpen diskusjon om fordeler og ulemper med microservices arkitektur sammenlignet med monolittiske applikasjoner.",
        maxAtendees: 100,
        atendees: [
            getUser("Erik Svendsen"),
            getUser("Julie Hansen"),
            getUser("Martin Bakke"),
        ],
    },
    {
        id: 8,
        name: "Next.js 15 - Hva er nytt?",
        date: new Date(2025, 9, 28),
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
        date: new Date(2025, 10, 8),
        time: "09:00 - 21:00",
        type: "hackathon" as EventType,
        location: "Innovation Lab",
        description:
            "12-timers hackathon fokusert på AI og maskinlæring. Bygg modeller, optimaliser algoritmer, og vis frem dine ferdigheter!",
        maxAtendees: 40,
        atendees: [
            getUser("AI-entusiast Sarah"),
            getUser("Data Scientist Tom"),
        ],
    },
    {
        id: 10,
        name: "Docker & Kubernetes Workshop",
        date: new Date(2025, 10, 12),
        time: "10:00 - 15:00",
        type: "workshop" as EventType,
        location: "Cogito Kontoret, Rom 201",
        description:
            "Praktisk workshop om containerisering med Docker og orkestrering med Kubernetes. Ta med egen laptop.",
        maxAtendees: 20,
        atendees: [
            getUser("DevOps Engineer Kim"),
            getUser("Backend Dev Alex"),
        ],
    },
    {
        id: 11,
        name: "Ny sikkerhetspolicy implementert",
        date: new Date(2025, 9, 21),
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
        date: new Date(2025, 9, 30),
        time: "14:00 - 15:30",
        type: "møte" as EventType,
        location: "Hovedkontoret / Teams",
        description:
            "Månedlig møte hvor ledelsen deler oppdateringer, Q4 resultater og planer for fremtiden. Q&A-sesjon inkludert.",
        maxAtendees: 200,
        atendees: [
            getUser("Team Lead Anna"),
            getUser("Developer Lars"),
            getUser("Designer Maria"),
            getUser("PO Henrik"),
            getUser("Ole Hansen"),
        ],
    },
    {
        id: 13,
        name: "Testing i JavaScript: Jest vs Vitest",
        date: new Date(2025, 10, 5),
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
        date: new Date(2025, 10, 15),
        time: "16:00 - 19:00",
        type: "annet" as EventType,
        location: "Escape Room Oslo",
        description:
            "Sosial aktivitet for teamet! Vi tar escape room-utfordringen sammen, etterfulgt av middag på restaurant.",
        maxAtendees: 15,
        atendees: [
            getUser("Emma Larsen"),
            getUser("Lucas Berg"),
            getUser("Sofia Eriksen"),
            getUser("Noah Pedersen"),
        ],
    },
    {
        id: 15,
        name: "CSS Grid & Flexbox Masterclass",
        date: new Date(2025, 10, 20),
        time: "13:00 - 17:00",
        type: "workshop" as EventType,
        location: "Online via Zoom",
        description:
            "Bli en mester i moderne CSS layout. Vi bygger responsive designs fra bunn med Grid og Flexbox.",
        maxAtendees: 35,
        atendees: [
            getUser("Ole Hansen"),
            getUser("Kari Nordmann"),
            getUser("Anders Johansen"),
            getUser("Ingrid Olsen"),
        ],
    },
    {
        id: 16,
        name: "Partnerskapsavtale med TechCorp signert",
        date: new Date(2025, 9, 24),
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
        date: new Date(2025, 9, 24),
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

/**
 * Get attendee users for a given event
 */
export function getUsersForEvent(event: Event): User[] {
    return event.atendees;
}

/**
 * Get attendee users by event id
 */
export function getUsersForEventId(eventId: number): User[] {
    const e = getEventById(eventId);
    return e?.atendees ?? [];
}

/**
 * Get attendee count for an event
 */
export function getAttendeeCount(eventId: number): number {
    return getUsersForEventId(eventId).length;
}

/**
 * Check if an event is at capacity
 */
export function isEventFull(eventId: number): boolean {
    const e = getEventById(eventId);
    if (!e) return false;
    if (e.maxAtendees <= 0) return false;
    return getAttendeeCount(eventId) >= e.maxAtendees;
}

/**
 * Get all attendee names for an event
 */
export function getAttendeeNames(eventId: number): string[] {
    const e = getEventById(eventId);
    return e?.atendees.map((u) => u.name) ?? [];
}

/**
 * Add an attendee to an event
 */
export function addAttendee(eventId: number, user: User): boolean {
    const e = getEventById(eventId);
    if (!e) return false;
    if (isEventFull(eventId)) return false;
    if (e.atendees.some((u) => u.id === user.id)) return false;

    e.atendees.push(user);
    return true;
}

/**
 * Remove an attendee from an event
 */
export function removeAttendee(eventId: number, userId: number): boolean {
    const e = getEventById(eventId);
    if (!e) return false;

    const index = e.atendees.findIndex((u) => u.id === userId);
    if (index === -1) return false;

    e.atendees.splice(index, 1);
    return true;
}

/**
 * Check if a user is registered for an event
 */
export function isUserRegistered(eventId: number, userId: number): boolean {
    const e = getEventById(eventId);
    if (!e) return false;
    return e.atendees.some((u) => u.id === userId);
}
