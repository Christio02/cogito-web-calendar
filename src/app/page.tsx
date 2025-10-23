"use client";
import CalendarNavigation from "@/components/calendar/CalendarNavigation";
import CalendarView from "@/components/calendar/CalendarView";
import { useState } from "react";

export default function Home() {
    const [year, setYear] = useState(() => {
        // init once
        const today = new Date();
        return today.getFullYear();
    });
    const [month, setMonth] = useState(() => {
        const today = new Date();
        return today.getMonth();
    });

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

    console.log("Month:", month);

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#13395b] to-[#1a4a7a] py-5 px-4">
            <section className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
                <CalendarNavigation
                    year={year}
                    month={month}
                    onPreviousMonth={handlePreviousMonth}
                    onNextMonth={handleNextMonth}
                    onToday={handleToday}
                />

                <CalendarView year={year} month={month} />
            </section>
        </main>
    );
}
