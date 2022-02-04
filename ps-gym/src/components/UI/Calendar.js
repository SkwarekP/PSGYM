import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";
import classes from "./Calendar.module.css"

function CalendarPicker() {
    return <Calendar className={classes.reactCalendar}></Calendar>

}

export default CalendarPicker;