import { User } from "@/interfaces/user";

export const mockUsers: User[] = [
    { id: 1, name: "Ole Hansen" },
    { id: 2, name: "Kari Nordmann" },
    { id: 3, name: "Per Jensen" },
    { id: 4, name: "Emma Larsen" },
    { id: 5, name: "Lucas Berg" },
    { id: 6, name: "Sofia Eriksen" },
    { id: 7, name: "Noah Pedersen" },
    { id: 8, name: "Mia Andersen" },
    { id: 9, name: "Anders Johansen" },
    { id: 10, name: "Ingrid Olsen" },
    { id: 11, name: "Team Lead Anna" },
    { id: 12, name: "Developer Lars" },
    { id: 13, name: "Designer Maria" },
    { id: 14, name: "PO Henrik" },
    { id: 15, name: "Erik Svendsen" },
    { id: 16, name: "Julie Hansen" },
    { id: 17, name: "Martin Bakke" },
    { id: 18, name: "AI-entusiast Sarah" },
    { id: 19, name: "Data Scientist Tom" },
    { id: 20, name: "DevOps Engineer Kim" },
    { id: 21, name: "Backend Dev Alex" },
];

const userByName = new Map(mockUsers.map((u) => [u.name, u]));

export function getUserByName(name: string): User | undefined {
    return userByName.get(name);
}
