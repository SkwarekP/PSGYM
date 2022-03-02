import {Card, Col, FormGroup, Row} from "react-bootstrap";
import {useState, useReducer, useEffect} from "react";
import classes from "./RegisterClientForm.module.css"
import Modal from "../UI/Modal";

const emailReducer = (state, action) => {
    if (action.type === "EMAIL") {
        return {
            value: action.val, isValid: action.val.includes("@") && action.val.includes("."),
            message: "Niepoprawny adres e-mail"
        };
    }
    return {value: "", isValid: false, message: ""}
}

const nrTelReducer = (state, action) => {
    if (action.type === "TEL") {
        return {value: action.val, isValid: action.val.length === 9, message: "Niepoprawny numer telefonu"}
    }
    return {value: "", isValid: false, message: ""}
}


function RegisterClientForm(props) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [correctMessage, setCorrectMessage] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
        message: "",
    })
    const [nrTelState, dispatchNrTel] = useReducer(nrTelReducer, {
        value: 0,
        isValid: null,
        message: "",
    })

    useEffect(() => {
        const identifier = setTimeout(() => {
            setIsFormValid(emailState.isValid && nrTelState.isValid)
        }, 500)

        return () => {
            clearTimeout(identifier)
        }
    }, [emailState, nrTelState])


    const addUserHandler = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            lastName: lastName,
            address: address,
            email: emailState.value,
            number_tel: nrTelState.value,
            number_magnetic_cart: (Math.random() * (10000 - 1000 + 1) + 1000).toFixed(),
            active: true,
        }

        if (isFormValid) {
            setIsCorrect(() => true)
            setCorrectMessage("Użytkownik został pomyślnie zarejestrowany !")
            props.onRegistered(data);
        } else {
            setIsCorrect(() => false)
            setCorrectMessage("Niepoprawne dane formularza!")
        }

    }

    return (
        <Modal onClose={props.onClose}>
            <Card className={classes.ClientCard}>
                <form onSubmit={addUserHandler}>
                    <Row>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="imie">Imię</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={(event) => {
                                        setName(() => event.target.value)
                                    }}
                                />
                                <p/>
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Nazwisko</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(event) => {
                                        setLastName(() => event.target.value)
                                    }}
                                />
                                <p/>
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Numer telefonu</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="nrTel"
                                    value={nrTelState.value}
                                    onChange={(event) => {
                                        dispatchNrTel({type: "TEL", val: event.target.value})
                                    }}
                                />
                                {!nrTelState.isValid && <p style={{color: "red"}}>{nrTelState.message}</p>}
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Adres</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={address}
                                    onChange={(event) => {
                                        setAddress(() => event.target.value)
                                    }}
                                />
                                <p/>
                            </FormGroup>
                            <FormGroup className={classes.center}>
                                <label htmlFor="model">Adres e-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={emailState.value}
                                    onChange={(event) => {
                                        dispatchEmail({type: "EMAIL", val: event.target.value})
                                    }}
                                />
                                {!emailState.isValid && <p style={{color: "red"}}>{emailState.message}</p>}
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
                                    onClick={props.onClose}>
                                Anuluj
                            </button>
                            {isCorrect ? <p style={{color: "green"}}>{correctMessage}</p> :
                                <p style={{color: "red"}}>{correctMessage}</p>}
                        </div>
                    </Row>
                </form>
            </Card>
        </Modal>
    )

}

export default RegisterClientForm;