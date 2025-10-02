export interface CalendaDay {
    date: Date;
    isCurrentMonth: boolean;
}

export interface CalendarMonth {
    year: number;
    month: number;
    days: CalendaDay[];
}

