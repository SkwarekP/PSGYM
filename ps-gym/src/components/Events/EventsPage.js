import {Col, Row} from "react-bootstrap";
import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import React, {useRef, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import "./EventsPage.css"
import NewEvent from "./NewEvent";

function EventsPage() {

    const [isCartShow, setIsCartShow] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);
    const [events, setEvents] = useState([])
    /*
        const calendarRef = useRef(null)
    */


    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    const showModalForm = () => {
        setIsModalShown(() => true)
    }
    const closeModalForm = () => {
        setIsModalShown(() => false)
    }

    const newEventHandler = (event) => {
        console.log(event)
        /*let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent(event)*/
        setEvents((prev) => [...prev, event])

    }


    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} className="pageCalendar">
                <button className="addEventButton" onClick={showModalForm}>Dodaj wydarzenie</button>
                <div style={{position: "relative", zIndex: 0}}>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        /*
                                                ref={calendarRef}
                        */
                        events={events}
                        weekends={true}
                    />
                </div>
                {isModalShown && <NewEvent onClose={closeModalForm} onEventAdd={newEventHandler}/>}
            </Col>


        </Row>
    )
}

export default EventsPage