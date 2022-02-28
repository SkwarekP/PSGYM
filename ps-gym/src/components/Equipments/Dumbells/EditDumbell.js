import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";
import Modal from "../../UI/Modal";
import {useEffect, useState} from "react";

function EditDumbell(props) {

    const [producent, setProducent] = useState("")
    const [type, setType] = useState("")
    const [weight, setWeight] = useState(2)
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")

    const newDumbellsHandler = (e) => {
        e.preventDefault();

        const data = {
            producent: producent,
            type: type,
            weight: weight,
            amount: amount,
            price: price,
            date: date
        }
        props.onReceive(data, props.tempDumbell._id)

    }

    useEffect(() => {
        setProducent(() => props.tempDumbell.producent)
        setType(() => props.tempDumbell.type)
        setWeight(() => props.tempDumbell.weight)
        setAmount(() => props.tempDumbell.amount)
        setPrice(() => props.tempDumbell.price)
        setDate(() => props.tempDumbell.date)
    }, [])
    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={newDumbellsHandler}>
                    <Row>
                        <Col>

                            <FormGroup className={classes.center}>
                                <label htmlFor="producent">Producent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="producent"
                                    defaultValue={props.tempDumbell.producent}
                                    onChange={(event) => {
                                        setProducent(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="name">Typ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="typ"
                                    defaultValue={props.tempDumbell.type}
                                    onChange={(event) => {
                                        setType(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="price">cena</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    defaultValue={props.tempDumbell.price}
                                    onChange={(event) => {
                                        setPrice(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="Amount">Ilość</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="ilosc"
                                    defaultValue={props.tempDumbell.amount}
                                    onChange={(event) => {
                                        setAmount(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="weight">Waga</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="weight"
                                    defaultValue={props.tempDumbell.weight}
                                    onChange={(event) => {
                                        setWeight(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Data zakupu</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="dataZakupu"
                                    defaultValue={props.tempDumbell.date}
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
                                Dodaj
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

export default EditDumbell