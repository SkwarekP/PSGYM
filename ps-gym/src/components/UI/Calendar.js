import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";
import classes from "./Calendar.module.css"

function CalendarPicker() {
    return <Calendar className={`${classes.calendar} ${classes.reactCalendar}`}/>

}

export default CalendarPicker;