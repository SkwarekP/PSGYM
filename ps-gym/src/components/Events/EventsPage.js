import {Col, Row} from "react-bootstrap";
import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import React, {useEffect, useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import "./EventsPage.css"
import NewEvent from "./NewEvent";
import ReadDescOrEdit from "./ReadDescOrEdit";

function EventsPage() {

    const [isCartShow, setIsCartShow] = useState(false);
    const [isModalShown, setIsModalShown] = useState(false);
    const [isReadDescOrEdit, setIsReadDescOrEdit] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({})
    const [events, setEvents] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    const [messageIfDeleted, setMessageIdDeleted] = useState("")


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

    const ReadDescOrEditClose = () => {
        setIsReadDescOrEdit(() => false)
    }


    useEffect(() => {
        fetch("http://localhost:5000/Events", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setEvents(() => res))
    }, [])

    useEffect(() => {
        const time = setTimeout(() => {
            setIsDeleted(() => false)
            setIsReadDescOrEdit(() => false)
        }, 1000)
        return () => {
            clearTimeout(time);
        }
    }, [isDeleted])

    const newEventHandler = (event, organizerId) => {
        fetch("http://localhost:5000/Events", {
            method: "POST",
            body: JSON.stringify(event),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setEvents((prev) => [...prev, res]))

        fetch(`http://localhost:5000/Workers/${organizerId}/Events`, {
            method: "PUT",
            body: JSON.stringify(event),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))

        setIsModalShown(() => false)
    }

    const editEventHandler = (data) => {
        fetch(`http://localhost:5000/Events/${data.id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setEvents((prev) => prev.map((event) => event._id === res._id ? res : event)))
    }

    const removeEventHandler = (id) => {
        fetch(`http://localhost:5000/Events/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(() => setEvents((prev) => prev.filter(e => e._id !== id)))
        setIsDeleted(() => true)

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
                        events={events}
                        eventClick={(event) => {
                            event.jsEvent.preventDefault()
                            const currEvent = events.filter((item) => item._id === event.event._def.extendedProps._id)
                            setCurrentEvent(currEvent)
                            setIsReadDescOrEdit(() => true)
                        }}
                    />
                </div>
                {isModalShown && <NewEvent onClose={closeModalForm} onEventAdd={newEventHandler}/>}
                {isReadDescOrEdit && <ReadDescOrEdit onClose={ReadDescOrEditClose} currEvent={currentEvent}
                                                     onReceive={editEventHandler} onDelete={removeEventHandler}
                                                     isDeleted={isDeleted}/>}
            </Col>


        </Row>
    )
}

export default EventsPage