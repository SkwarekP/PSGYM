import Modal from "../UI/Modal";
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import classes from "../UI/ContactCart.module.css";

function HistoryInfo(props) {

    const [whenIn, setWhenIn] = useState([])
    const [whenOut, setWhenOut] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/clients/${props.idCurrClient}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => res.clientInfo)
            .then(res => fetch(`http://localhost:5000/clientsInfo/getSingleInfo/${res}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(res => {
                        var arrayWhenIn = []
                        var arrayWhenOut = []
                        for (var i = 0; i < res.whenIn.length; i++) {
                            arrayWhenIn.push(res.whenIn[i])
                        }

                        setWhenIn(() => arrayWhenIn)

                        for (var j = 0; j < res.whenOut.length; j++) {
                            arrayWhenOut.push(res.whenOut[j])
                        }

                        setWhenOut(() => arrayWhenOut)
                    })
            )
    }, [])

    return (
        <Modal onClose={props.onClose}>
            <button className={classes.exit} onClick={props.onClose}>X</button>

            <div className="text-center">
                <label className="text-white">Historia wizyt w obiekcie PSGYM</label>
                < br/>
                < br/>
                <Row>
                    <Col xs={7}>
                        {whenIn.map((item, index) => (
                            <p className="text-white">
                                {index + 1}. {item}
                            </p>
                        ))}
                    </Col>
                    <Col xs={3}>
                        {whenOut.map(item => (
                            <p className="text-white">
                                {item}
                            </p>
                        ))}
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default HistoryInfo;