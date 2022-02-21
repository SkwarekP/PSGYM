import Modal from "../UI/Modal";
import {Card, Col, Row, FormGroup} from 'react-bootstrap'
import classes from "../Clients/RegisterClientForm.module.css";
import {useState} from "react";

function NewEvent(props) {

    const [title, setTitle] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [organizer, setOrganizer] = useState("")

    const sendData = (e) => {
        e.preventDefault()

        const data = {
            title: title,
            start: start,
            end: end,
        }

        props.onEventAdd(data)
    }

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
                                <p/>
                            </FormGroup>
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
                                <p/>
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
                                <p/>
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Prowadzący</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="organizer"
                                    value={organizer}
                                    onChange={(event) => {
                                        setOrganizer(() => event.target.value)
                                    }}
                                />
                                <p/>
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