"use client";

import CalendarGrid from "@/components/calendar/CalendarGrid";
import Navigation from "@/components/shared/Navigation";
import EventList from "@/components/events/EventList";
import ListControls from "@/components/events/ListControls";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { mockEvents } from "@/data/mock-events";
import { EventType } from "@/interfaces/event";
import { TimeWindowType } from "@/interfaces/list";
import {
    isAfter,
    isSameMonth,
    startOfToday,
    startOfMonth,
    endOfMonth,
} from "date-fns";

export default function Home() {
    const [view, setView] = useState<"calendar" | "list">("calendar");

    const [year, setYear] = useState(() => {
        const today = new Date();
        return today.getFullYear();
    });
    const [month, setMonth] = useState(() => {
        const today = new Date();
        return today.getMonth();
    });

    // filter state
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterType, setFilterType] = useState<EventType | "all">("all");
    const [timeWindow, setTimeWindow] = useState<TimeWindowType>("upcoming");
    const [sortBy, setSortBy] = useState<"date" | "name">("date");

    // calendar navigation handlers
    const handlePreviousMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const handleToday = () => {
        const today = new Date();
        setYear(today.getFullYear());
        setMonth(today.getMonth());
    };

    // reset filters
    const handleResetFilters = () => {
        setSearchTerm("");
        setFilterType("all");
        setTimeWindow("upcoming");
        setSortBy("date");
    };

    // filter logic, we use useMemo to make sure it only runs when dependencies changes
    const filteredEvents = useMemo(() => {
        let result = [...mockEvents];

        // time window filter
        const today = startOfToday();
        const monthStart = startOfMonth(new Date(year, month));
        const monthEnd = endOfMonth(new Date(year, month));

        if (timeWindow === "upcoming") {
            result = result.filter(
                (event) =>
                    isAfter(event.date, today) ||
                    isSameMonth(event.date, today),
            );
        } else if (timeWindow === "thisMonth") {
            result = result.filter(
                (event) => event.date >= monthStart && event.date <= monthEnd,
            );
        }
        // "all" = no time filter

        //  search filter (name, description, location)
        if (searchTerm.trim()) {
            const search = searchTerm.toLowerCase();
            result = result.filter((event) => {
                const nameMatch = event.name.toLowerCase().includes(search);
                const descMatch =
                    event.description?.toLowerCase().includes(search) ?? false;
                const locationMatch = event.location
                    .toLowerCase()
                    .includes(search);
                return nameMatch || descMatch || locationMatch;
            });
        }

        // type filter
        if (filterType !== "all") {
            result = result.filter((event) => event.type === filterType);
        }

        // sort
        if (sortBy === "date") {
            result.sort((a, b) => {
                const dateCompare = a.date.getTime() - b.date.getTime();
                if (dateCompare !== 0) return dateCompare;
                // Secondary sort by name if dates are equal
                return a.name.localeCompare(b.name);
            });
        } else {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [timeWindow, searchTerm, filterType, sortBy, year, month]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#13395b] to-[#1a4a7a] py-5 px-4">
            <div className="flex justify-center gap-4 mb-4">
                <Button
                    onClick={() => setView("calendar")}
                    variant={view === "calendar" ? "default" : "outline"}
                >
                    Calendar
                </Button>
                <Button
                    onClick={() => setView("list")}
                    variant={view === "list" ? "default" : "outline"}
                >
                    List
                </Button>
            </div>

            <section className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
                {/* list controls(only show in list view) */}
                {view === "list" && (
                    <div className="mb-6">
                        <ListControls
                            searchTerm={searchTerm}
                            type={filterType}
                            timeWindow={timeWindow}
                            sortBy={sortBy}
                            onSearchChange={setSearchTerm}
                            onTypeChange={setFilterType}
                            onTimeWindowChange={setTimeWindow}
                            onSortChange={setSortBy}
                            onReset={handleResetFilters}
                            resultCount={filteredEvents.length}
                        />
                    </div>
                )}

                {view === "calendar" ? (
                    <>
                        <Navigation
                            year={year}
                            month={month}
                            onPreviousMonth={handlePreviousMonth}
                            onNextMonth={handleNextMonth}
                            onToday={handleToday}
                        />
                        <CalendarGrid
                            year={year}
                            month={month}
                            events={mockEvents}
                        />
                    </>
                ) : (
                    <EventList events={filteredEvents} />
                )}
            </section>
        </main>
    );
}
