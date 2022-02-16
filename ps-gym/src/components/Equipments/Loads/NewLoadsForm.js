import {useState} from "react";
import Modal from "../../UI/Modal";
import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";

function NewLoadsForm(props) {

    const [picture, setPicture] = useState(null)
    const [producent, setProducent] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState(0)
    const [weight, setWeight] = useState(0)
    const [date, setDate] = useState("")

    const newLoadsHandler = (e) => {
        e.preventDefault();
        const data = {
            picture: picture,
            producent: producent,
            type: type,
            amount: amount,
            weight: weight,
            date: date,
        }
        console.log(data);
    }

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={newLoadsHandler}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="zdjecie">Zdjęcie</label>
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
                                <label htmlFor="producent">Producent</label>
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
                                <label htmlFor="name">Typ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="typ"
                                    value={type}
                                    onChange={(event) => {
                                        setType(() => event.target.value)
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
                                    value={amount}
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
                                    value={weight}
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

export default NewLoadsForm;