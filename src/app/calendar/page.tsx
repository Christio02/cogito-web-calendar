import CalendarView from "@/components/calendar/CalendarView";

export default function Page() {

    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()


    return (
        <section>
            <CalendarView year={year} month={month}/>

        </section>
    )
}