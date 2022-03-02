import Modal from "../UI/Modal";
import {useEffect, useState} from "react";
import classes from "../UI/ContactCart.module.css";
import {Col, FormGroup, Row} from "react-bootstrap";

function KarnetInfo(props) {

    const [clientInfo, setClientInfo] = useState({})
    const [isUpdate, setIsUpdate] = useState(false)
    const [fromKarnetData, setFromKarnetData] = useState("")
    const [toKarnetData, setToKarnetData] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/clients/${props.idCurrClient}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => res.clientInfo)
            .then(res => {
                fetch(`http://localhost:5000/clientsInfo/getSingleInfo/${res}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(res => setClientInfo(() => res))
            })

    }, [])

    const onUpdateKarnet = (e) => {
        e.preventDefault()

        const data = {
            fromKarnetDate: fromKarnetData,
            toKarnetDate: toKarnetData
        }

        fetch(`http://localhost:5000/clientsInfo/Edit/${clientInfo._id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())

        props.onClose()
    }

    return (
        <Modal onClose={props.onClose}>
            <button className={classes.exit} onClick={props.onClose}>X</button>
            <div className="text-center">
                <label className="text-white">Ważność karnetu: </label>
                < br/>
                < br/>
                <p className="text-white">{clientInfo.fromKarnetDate} - {clientInfo.toKarnetDate}
                    <button
                        className="redBtn"
                        style={{padding: "5px", marginLeft: "10px"}}
                        onClick={() => setIsUpdate((prev) => !prev)}
                    >
                        Aktualizuj
                    </button>
                </p>
                < br/>
                {isUpdate &&
                    <form onSubmit={onUpdateKarnet}>
                        <Row>
                            <Col>
                                <p className="text-white">Data ponowienia karnetu</p>
                                <FormGroup>
                                    <input
                                        type="date"
                                        className="form-control "
                                        name="start"
                                        value={fromKarnetData}
                                        style={{width: "280px", marginLeft: "0px"}}
                                        onChange={(event) => setFromKarnetData(() => event.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <p className="text-white">Data zakończenia karnetu</p>
                                <FormGroup>
                                    <input
                                        type="date"
                                        className="form-control "
                                        name="end"
                                        value={toKarnetData}
                                        style={{width: "280px", marginLeft: "0px"}}
                                        onChange={(event) => setToKarnetData(() => event.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <button className="redBtn mt-4" type="submit">Zatwierdź</button>
                    </form>
                }
            </div>
        </Modal>

    )
}

export default KarnetInfo