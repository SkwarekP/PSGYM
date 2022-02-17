import {Card, Row, Form, Col, InputGroup, Container} from "react-bootstrap";
import {PersonFill, KeyFill} from "react-bootstrap-icons";
import classes from "./LoginForm.module.css"
import {useReducer, useState} from "react";
import LoginLogo from "../../Assets/images/loginLogo.png"

const emailReducer = (state, action) => {

    if (action.type === "EmptyAfterClick") return {value: "", isValid: false, validMessage: "Pole nie moze byc puste!"}


    if (action.val === "") return {value: "", isValid: false, validMessage: ""}

    if (action.val !== "") {
        return {
            value: action.val,
            isValid: (action.val.trim().includes("@") && action.val.trim().includes(".")),
            validMessage: "Adres e-mail musi zawierać znak specjalny @ i ."
        }
    }

}

const passwordReducer = (state, action) => {

    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]+/;

    if (action.type === "EmptyAfterClick") return {value: "", isValid: false, validMessage: "Pole nie moze byc puste!"}

    if (action.val === "") return {value: "", isValid: false, validMessage: ""}

    if (action.val !== "") {
        return {
            value: action.val,
            isValid: format.test(action.val) && action.val.trim().length > 5,
            validMessage: "Hasło musi zawierać przynajmniej jeden znak specjalny lub jest zbyt krótkie"
        }
    }

}

function LoginForm(props) {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: false,
        validMessage: ""
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: false,
        validMessage: ""
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [formValidMessage, setFormValidMessage] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            email: emailState.value,
            password: passwordState.value
        }
        if (emailState.isValid && passwordState.isValid) {
            setIsFormValid(() => true)
            setFormValidMessage(() => "Następuje przekierowanie...")
            props.onReceive(data)
            dispatchEmail({val: ""})
            dispatchPassword({val: ""})
        }
        if (emailState.value === "") {
            dispatchEmail({type: "EmptyAfterClick"})
            setIsFormValid(() => false)
        }
        if (passwordState.value === "") {
            dispatchPassword({type: "EmptyAfterClick"})
            setIsFormValid(() => false)
        }

    }

    return (
        <Container className={classes.center}>
            <Card className={classes.card}>
                <Row style={{height: "100px"}}>
                    <Col xs={12} className="text-center"><img src={LoginLogo} alt="" className={classes.logo}/></Col>
                </Row>
                <Form className="mt-4 text-black" onSubmit={submitHandler}>
                    <Form.Group as={Col}>
                        <Form.Label className="fs-4 text-white" htmlFor="email">
                            Email Address
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <PersonFill/>
                            </InputGroup.Text>
                            <Form.Control
                                type="email"
                                id="email"
                                value={emailState.value}
                                onChange={(e) => dispatchEmail({
                                    type: "EMAIL",
                                    val: e.target.value
                                })}
                            />
                        </InputGroup>
                        {!emailState.isValid && <Form.Text style={{color: "red"}}>
                            {emailState.validMessage}
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group as={Col} className="ml-2">
                        <Form.Label className="fs-5 mt-2 text-white" htmlFor="password">
                            Password
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Text>
                                <KeyFill/>
                            </InputGroup.Text>
                            <Form.Control
                                type="password"
                                id="password"
                                value={passwordState.value}
                                onChange={(e) => dispatchPassword({
                                    type: "PASSWORD",
                                    val: e.target.value
                                })}
                            />
                        </InputGroup>
                        {!passwordState.isValid && <Form.Text style={{color: "red"}}>
                            {passwordState.validMessage}
                        </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="Button" className="text-center">
                        <button type="submit" className={` mt-4 ${classes.btnLog} `}>
                            Log in
                        </button>
                        {isFormValid && <p style={{color: "#90EE90"}} className="mt-2">{formValidMessage} </p>}
                    </Form.Group>
                </Form>
            </Card>
        </Container>
    )

}

export default LoginForm;