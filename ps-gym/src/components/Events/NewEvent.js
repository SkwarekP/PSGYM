import Modal from "../UI/Modal";
import {Card, Col, Row, FormGroup} from 'react-bootstrap'
import classes from "../Clients/RegisterClientForm.module.css";
import {useEffect, useState} from "react";

function NewEvent(props) {

    const [title, setTitle] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [users, setUsers] = useState([])
    const [organizer, setOrganizer] = useState("")
    const [timeStart, setTimeStart] = useState("")
    const [timeEndd, setTimeEndd] = useState("")
    const [place, setPlace] = useState("")

    const sendData = (e) => {
        e.preventDefault()

        const data = {
            title: title,
            start: start,
            end: end,
            timeStart: timeStart,
            timeEndd: timeEndd,
            worker: organizer,
            place: place,
        }
        console.log(data)
        props.onEventAdd(data)
    }

    useEffect(() => {
        fetch("http://localhost:5000/Users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(res => {
                setUsers(() => res)
                return res
            })
            .then(res => setOrganizer(() => res[0].name + " " + res[0].lastName))
    }, [])

    return (
        <Modal onClose={props.onClose}>
            <Card className="newEventCard">
                <form onSubmit={sendData}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="imie">Nazwa wydarzenia</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={title}
                                    onChange={(event) => {
                                        setTitle(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Pracownik rejestrujący</label>
                                <select
                                    className="form-control"
                                    name="organizer"
                                    onChange={(event) => setOrganizer(() => event.target.value)}
                                >
                                    {users.map((worker) => (
                                        <option key={worker._id}>{worker.name + " " + worker.lastName}</option>
                                    ))}
                                </select>
                            </FormGroup>

                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Miejsce</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="place"
                                    value={place}
                                    onChange={(event) => {
                                        setPlace(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Start</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="lastName"
                                    value={start}
                                    onChange={(event) => {
                                        setStart(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Koniec</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="lastName"
                                    value={end}
                                    onChange={(event) => {
                                        setEnd(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Początek wydarzenia</label>
                                <input
                                    type="time"
                                    value={timeStart}
                                    className="m-1"

                                    onChange={(event) => {
                                        setTimeStart(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Koniec wydarzenia</label>
                                <input
                                    type="time"
                                    value={timeEndd}
                                    className="m-1"
                                    onChange={(event) => {
                                        setTimeEndd(() => event.target.value)
                                    }}
                                />
                            </FormGroup>


                        </Col>
                        <div className="m-3 text-center">
                            <button
                                type="submit"
                                className="redBtn"
                                style={{width: "100px"}}
                            >
                                Dodaj
                            </button>
                            <button className="redBtn"
                                    type="button"
                                    style={{width: "100px", marginLeft: "20px"}}
                                    onClick={props.onClose}>
                                Anuluj
                            </button>
                        </div>
                    </Row>
                </form>
            </Card>
        </Modal>
    )
}

export default NewEvent;