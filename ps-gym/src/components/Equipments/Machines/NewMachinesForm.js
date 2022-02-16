import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";
import Modal from "../../UI/Modal";
import {useState} from "react";

function NewMachinesForm(props) {

    const [picture, setPicture] = useState(null)
    const [serialNumber, setSerialNumber] = useState(0)
    const [name, setName] = useState("")
    const [producent, setProducent] = useState("")
    const [date, setDate] = useState("")

    const newMachineHandler = (e) => {
        e.preventDefault();
        const data = {
            picture: picture,
            serial_number: serialNumber,
            name: name,
            producent: producent,
            date: date,
        }
        console.log(data);
    }

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={newMachineHandler}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="imie">Zdjęcie</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="zdjecie"
                                    onChange={(event) => {
                                        setPicture(() => event.target.files[0])
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Numer seryjny</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nrSeryjny"
                                    value={serialNumber}
                                    onChange={(event) => {
                                        setSerialNumber(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Nazwa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nazwa"
                                    value={name}
                                    onChange={(event) => {
                                        setName(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Producent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="producent"
                                    value={producent}
                                    onChange={(event) => {
                                        setProducent(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Data zakupu</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dataZakupu"
                                    value={date}
                                    onChange={(event) => {
                                        setDate(() => event.target.value)
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
                                Zarejestruj
                            </button>
                            <button className="redBtn"
                                    type="button"
                                    style={{width: "100px", marginLeft: "20px"}}
                                    onClick={props.onClose}
                            >
                                Anuluj
                            </button>
                        </div>
                    </Row>
                </form>
            </Card>
        </Modal>
    )
}

export default NewMachinesForm;