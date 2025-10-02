import { getCalendarDays } from "@/lib/calendar/calendar-helpers"
import { isToday } from "date-fns"

export default function ({year, month}: {year: number, month: number}){
    const day_labels = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"]
    const calendar_days = getCalendarDays(year, month)
    return(
        <>
        <section className="px-4">
       
        <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200">

            
            {day_labels.map((day, i)=>
                <div className="mr-4 bg-gray-100 p-2 text-center font-semibold text-sm" key={i}>{day}</div>
            )}
       
        
            {calendar_days.map((day, i)=>(
                <div 
                className={`bg-white boarder border-black min-h-24 ${!day.isCurrentMonth ? 'opacity-40 bg-gray-50' : ''} ${isToday(day.date) ? 'ring-2 ring-blue-500' : ''}`}
                key={i}
                >
                    <div className="font-bold">
                        {day.date.getDate()}
                    </div>
                    
                
                
                </div>


            ))}
            
        </div>
        </section>
        </>
    )
}
