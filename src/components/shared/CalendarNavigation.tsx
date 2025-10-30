"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface CalendarNavigationProps {
    year: number;
    month: number;
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    onToday: () => void;
}

export default function CalendarNavigation({
    year,
    month,
    onPreviousMonth,
    onNextMonth,
    onToday,
}: CalendarNavigationProps) {
    const monthNames = [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const isCurrentMonth = () => {
        const now = new Date();
        return year === now.getFullYear() && month === now.getMonth();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.0] }}
            className="flex flex-col tablet:flex-col items-center justify-between mb-8 px-4 gap-4"
        >
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl tablet:text-4xl font-bold text-foreground tracking-wide">
                    {monthNames[month]} {year}
                </h1>
            </div>
            <div className="flex flex-row justify-between w-full max-w-md">
                <div className="flex items-center gap-3">
                    <Button
                        onClick={onPreviousMonth}
                        aria-label="Forrige måned"
                        className="group relative h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 border-0 p-0"
                    >
                        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                    </Button>
                </div>

                <div className="flex flex-col tablet:flex-row items-center gap-4">
                    <Button
                        onClick={onToday}
                        disabled={isCurrentMonth()}
                        className={`
                                        px-6 py-3 h-12 rounded-xl font-semibold text-base
                                        transition-all duration-300 shadow-md
                                        ${
                                            isCurrentMonth()
                                                ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60 shadow-none"
                                                : "bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-lg hover:scale-105"
                                        }
                                      `}
                    >
                        I dag
                    </Button>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        onClick={onNextMonth}
                        aria-label="Neste måned"
                        className="group relative h-12 w-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 border-0 p-0"
                    >
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
