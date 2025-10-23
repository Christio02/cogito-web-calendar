"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import type { Event } from "@/interfaces/event";
import { getEventTypeLabel } from "@/lib/calendar/calendar-helpers";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface EventListItemProps {
    event: Event;
    index: number;
}

export default function EventListItem({ event, index }: EventListItemProps) {
    const getEventTypeBadgeColor = (type: string) => {
        const colors: Record<string, string> = {
            workshop: "bg-[#13395b] text-white",
            nyhet: "bg-[#ff4757] text-white",
            hackathon: "bg-purple-600 text-white",
            blogpost: "bg-green-600 text-white",
            møte: "bg-orange-600 text-white",
            annet: "bg-gray-600 text-white",
        };
        return colors[type] || "bg-gray-600 text-white";
    };

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("nb-NO", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    };

    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/events/${event.id}`);
    };

    const attendeeCount = event.atendees.length;
    const spotsLeft =
        event.maxAtendees > 0 ? event.maxAtendees - attendeeCount : null;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
        >
            <div className="p-6">
                {/* Header with title and badge */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold text-[#13395b] leading-tight flex-1">
                        {event.name}
                    </h3>
                    <span
                        className={`${getEventTypeBadgeColor(event.type)} px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap self-start`}
                    >
                        {getEventTypeLabel(event.type)}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                </p>

                {/* Event details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4 text-[#13395b]" />
                        <span className="text-sm">
                            {formatDate(event.date)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-[#13395b]" />
                        <span className="text-sm">{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-[#13395b]" />
                        <span className="text-sm">{event.location}</span>
                    </div>

                    {event.maxAtendees > 0 && (
                        <div className="flex items-center gap-2 text-gray-700">
                            <Users className="w-4 h-4 text-[#13395b]" />
                            <span className="text-sm">
                                {attendeeCount} / {event.maxAtendees} påmeldte
                                {spotsLeft !== null && spotsLeft > 0 && (
                                    <span className="text-[#ff4757] font-semibold ml-1">
                                        ({spotsLeft} plasser igjen)
                                    </span>
                                )}
                                {spotsLeft === 0 && (
                                    <span className="text-red-600 font-semibold ml-1">
                                        (Fullt)
                                    </span>
                                )}
                            </span>
                        </div>
                    )}
                </div>

                {/* Attendees list (if any) */}
                {event.atendees.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                            Påmeldte:
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {event.atendees.slice(0, 5).map((attendee, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                                >
                                    {attendee}
                                </span>
                            ))}
                            {event.atendees.length > 5 && (
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    +{event.atendees.length - 5} flere
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Action footer */}
            <div className="bg-gray-50 px-6 py-3 flex justify-end">
                <Button
                    className="text-[#13395b] hover:text-white font-semibold text-sm transition-colors duration-200 bg-color-none hover:bg-[#13395b]"
                    onClick={handleNavigation}
                >
                    Se detaljer →
                </Button>
            </div>
        </motion.article>
    );
}
