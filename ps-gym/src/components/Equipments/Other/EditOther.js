import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";
import Modal from "../../UI/Modal";
import {useEffect, useState} from "react";

function EditOther(props) {

    const [producent, setProducent] = useState("")
    const [name, setName] = useState("")
    const [destination, setDestination] = useState("")
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")

    const newOtherHandler = (e) => {
        e.preventDefault()

        const data = {
            producent: producent,
            name: name,
            destination: destination,
            amount: amount,
            price: price,
            date: date,
        }
        props.onReceive(data, props.tempOther._id);
    }

    useEffect(() => {
        setProducent(() => props.tempOther.producent)
        setName(() => props.tempOther.name)
        setDestination(() => props.tempOther.destination)
        setAmount(() => props.tempOther.amount)
        setPrice(() => props.tempOther.price)
        setDate(() => props.tempOther.date)
    }, [])

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={newOtherHandler}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="producent">Producent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="producent"
                                    defaultValue={props.tempOther.producent}
                                    onChange={(event) => {
                                        setProducent(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="name">Nazwa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    defaultValue={props.tempOther.name}
                                    onChange={(event) => {
                                        setName(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="price">Cena</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    defaultValue={props.tempOther.price}
                                    onChange={(event) => {
                                        setPrice(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="weight">Przeznaczenie</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="destination"
                                    defaultValue={props.tempOther.destination}
                                    onChange={(event) => {
                                        setDestination(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="Amount">Ilość</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="ilosc"
                                    defaultValue={props.tempOther.amount}
                                    onChange={(event) => {
                                        setAmount(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Data zakupu</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dataZakupu"
                                    defaultValue={props.tempOther.date}
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

export default EditOther