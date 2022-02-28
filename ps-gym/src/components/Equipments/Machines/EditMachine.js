import Modal from "../../UI/Modal";
import classes from "../../Clients/RegisterClientForm.module.css";
import {Card, Col, FormGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

function EditMachine(props) {

    const [serialNumber, setSerialNumber] = useState("")
    const [name, setName] = useState("")
    const [producent, setProducent] = useState("")
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")

    const sendEditedData = (e) => {
        e.preventDefault()

        const data = {
            serial_number: serialNumber,
            name: name,
            producent: producent,
            price: price,
            date: date,
        }
        props.onReceive(data, props.tempMachine._id)
    }

    useEffect(() => {
        setSerialNumber(() => props.tempMachine.serial_number)
        setName(() => props.tempMachine.name)
        setProducent(() => props.tempMachine.producent)
        setPrice(() => props.tempMachine.price)
        setDate(() => props.tempMachine.date)

    }, [])

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={sendEditedData}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Numer seryjny</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nrSeryjny"
                                    defaultValue={props.tempMachine.serial_number}
                                    onChange={(event) => {
                                        setSerialNumber(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Nazwa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nazwa"
                                    defaultValue={props.tempMachine.name}
                                    onChange={(event) => {
                                        setName(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="cena">Cena</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="cena"
                                    defaultValue={props.tempMachine.price}
                                    onChange={(event) => {
                                        setPrice(() => +event.target.value)
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
                                    defaultValue={props.tempMachine.producent}
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
                                    defaultValue={props.tempMachine.date}
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
                                Zatwierdź
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

export default EditMachine