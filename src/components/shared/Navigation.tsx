"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface NavigationProps {
    year: number;
    month: number;
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    onToday: () => void;
}

export default function Navigation({
    year,
    month,
    onPreviousMonth,
    onNextMonth,
    onToday,
}: NavigationProps) {
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
            className="flex flex-row tablet:flex-row items-center justify-between mb-8 px-4 gap-4"
        >
            {/* Left: Previous Month Button */}
            <div className="flex items-center gap-3">
                <Button
                    onClick={onPreviousMonth}
                    aria-label="Forrige måned"
                    className="group relative h-12 w-12 rounded-xl bg-[#13395b] hover:bg-[#1a4a7a] text-white shadow-md hover:shadow-lg transition-all duration-300 border-0 p-0"
                >
                    <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                </Button>
            </div>

            {/* Center: Month/Year Display + Today Button */}
            <div className="flex flex-col tablet:flex-row items-center gap-4">
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl tablet:text-4xl font-bold text-[#13395b] tracking-wide">
                        {monthNames[month]} {year}
                    </h1>
                </div>

                <Button
                    onClick={onToday}
                    disabled={isCurrentMonth()}
                    className={`
                             px-6 py-3 h-12 rounded-xl font-semibold text-base
                             transition-all duration-300 shadow-md
                             ${
                                 isCurrentMonth()
                                     ? "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60 shadow-none"
                                     : "bg-[#ff4757] hover:bg-[#ff3545] text-white hover:shadow-lg hover:scale-105"
                             }
                         `}
                >
                    I dag
                </Button>
            </div>

            {/* Right: Next Month Button */}
            <div className="flex items-center gap-3">
                <Button
                    onClick={onNextMonth}
                    aria-label="Neste måned"
                    className="group relative h-12 w-12 rounded-xl bg-[#13395b] hover:bg-[#1a4a7a] text-white shadow-md hover:shadow-lg transition-all duration-300 border-0 p-0"
                >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Button>
            </div>
        </motion.div>
    );
}
