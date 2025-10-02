import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth
} from "date-fns";

export function getCalendarDays(year: number, month: number){
    const monthStart = startOfMonth(new Date(year, month))
    const monthEnd = endOfMonth(monthStart)

    const calendarStart = startOfWeek(monthStart, {weekStartsOn: 1})
    const calendarEnd = endOfWeek(monthEnd, {weekStartsOn: 1})

    const days = eachDayOfInterval({start: calendarStart, end: calendarEnd})

    return days.map(date => ({
        date,
        isCurrentMonth: isSameMonth(date, monthStart)
    }))
}