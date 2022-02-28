import Modal from "../../UI/Modal";
import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";
import {useEffect, useState} from "react";

function EditBarbell(props) {

    const [producent, setProducent] = useState("")
    const [type, setType] = useState("")
    const [weight, setWeight] = useState(2)
    const [amount, setAmount] = useState(1)
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")

    const editBarbellHandler = (e) => {
        e.preventDefault();

        const data = {
            producent: producent,
            type: type,
            weight: weight,
            amount: amount,
            price: price,
            date: date
        }
        props.onReceive(data, props.tempBarbell._id)
    }

    useEffect(() => {
        setProducent(() => props.tempBarbell.producent)
        setType(() => props.tempBarbell.type)
        setWeight(() => props.tempBarbell.weight)
        setAmount(() => props.tempBarbell.amount)
        setPrice(() => props.tempBarbell.price)
        setDate(() => props.tempBarbell.date)
    }, [])

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={editBarbellHandler}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="producent">Producent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="producent"
                                    defaultValue={props.tempBarbell.producent}
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
                                    defaultValue={props.tempBarbell.type}
                                    onChange={(event) => {
                                        setType(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="price">Cena</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    defaultValue={props.tempBarbell.price}
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
                                    defaultValue={props.tempBarbell.amount}
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
                                    defaultValue={props.tempBarbell.weight}
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
                                    defaultValue={props.tempBarbell.date}
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

export default EditBarbell