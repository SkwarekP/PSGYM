import Modal from "../../UI/Modal";
import {Card, Col, FormGroup, Row} from "react-bootstrap";
import classes from "../../Clients/RegisterClientForm.module.css";
import {useState} from "react";

function NewOtherForm(props) {

    const [picture, setPicture] = useState(null)
    const [producent, setProducent] = useState("")
    const [name, setName] = useState("")
    const [destination, setDestination] = useState("")
    const [amount, setAmount] = useState(1)
    const [date, setDate] = useState("")

    const newOtherHandler = (e) => {
        e.preventDefault()

        const data = {
            picture: picture,
            producent: producent,
            name: name,
            destination: destination,
            amount: amount,
            date: date,
        }
        console.log(data);
    }
    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={newOtherHandler}>
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
                                <label htmlFor="name">Nazwa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={(event) => {
                                        setName(() => event.target.value)
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
                                    value={destination}
                                    onChange={(event) => {
                                        setDestination(() => +event.target.value)
                                    }}
                                />
                            </FormGroup>
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

export default NewOtherForm;