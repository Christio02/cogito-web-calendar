import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
    <section className="flex flex-row items-center justify-between mb-6 px-4">
      <div>
        <Button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={onPreviousMonth}
          aria-label="Previous month"
        >
          <ArrowLeft />
        </Button>
      </div>
      <div>
        <h1 className="text-3xl font-bold">{monthNames[month]}</h1>
      </div>

      <button
        onClick={onToday}
        disabled={isCurrentMonth()}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${
          isCurrentMonth() ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        I dag
      </button>

      <div>
        <Button
          onClick={onNextMonth}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          aria-label="Next month"
        >
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
