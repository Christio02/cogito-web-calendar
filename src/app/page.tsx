import CalendarView from "@/components/calendar/CalendarView";
import Image from "next/image";

export default function Home() {

  

      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth()
  
  
      return (
        <main className="container mx-auto py-8">
          <h1>Calendar grid test</h1>
          <section>
              <CalendarView year={year} month={month}/>
  
          </section>
          </main>
      )
  
}
