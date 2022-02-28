import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";
import Modal from "../../UI/Modal";
import {useEffect, useState} from "react";

function EditLoad(props) {

    const [producent, setProducent] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)
    const [weight, setWeight] = useState(0)
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState("")

    const sendEditedLoad = (e) => {
        e.preventDefault();
        const data = {
            producent: producent,
            type: type,
            amount: amount,
            weight: weight,
            price: price,
            date: date,
        }

        props.onReceive(data, props.tempLoad._id)
        setProducent("")
        setType("")
        setAmount(0)
        setWeight(0)
        setPrice(0)
        setDate("")
    }
    useEffect(() => {
        setType(() => props.tempLoad.type)
        setAmount(() => props.tempLoad.name)
        setWeight(() => props.tempLoad.weight)
        setProducent(() => props.tempLoad.producent)
        setPrice(() => props.tempLoad.price)
        setDate(() => props.tempLoad.date)

    }, [])

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={sendEditedLoad}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="producent">Producent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="producent"
                                    defaultValue={props.tempLoad.producent}
                                    onChange={(event) => {
                                        setProducent(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="type">Typ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="typ"
                                    defaultValue={props.tempLoad.type}
                                    onChange={(event) => {
                                        setType(() => event.target.value)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="cena">Cena</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="cena"
                                    defaultValue={props.tempLoad.price}
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
                                    defaultValue={props.tempLoad.amount}
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
                                    defaultValue={props.tempLoad.weight}
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
                                    defaultValue={props.tempLoad.date}
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

export default EditLoad