import Modal from "../UI/Modal";
import {FormGroup} from "react-bootstrap";
import {useEffect, useState} from 'react'
import classes from "../UI/ContactCart.module.css";

function ChangeStanItem(props) {

    const [stan, setStan] = useState(0)

    useEffect(() => {
        setStan(() => props.stan)
    }, [props.stan])

    const changeStanSender = (e) => {
        e.preventDefault()

        const data = {
            id: props.id,
            stan: stan
        }

        if (stan !== props.stan && stan > 0) {
            props.onReceiveStan(data)
            props.onClose()
        } else props.onClose()
    }

    return (
        <Modal onClose={props.onClose}>
            <button className={classes.exit} onClick={props.onClose}>X</button>
            <form onSubmit={changeStanSender}>
                <FormGroup className="text-center">
                    <label htmlFor="stan" className="mt-2 text-white" style={{fontSize: "18px"}}>Stan
                        produktu: {props.title}</label>
                    <input
                        type="number"
                        className="form-control text-center mt-3"
                        style={{width: "300px", marginLeft: "150px"}}
                        name="titleEvent"
                        defaultValue={props.stan}
                        onChange={(event) => {
                            setStan(() => +event.target.value)
                        }}
                    />
                </FormGroup>
                <div className="m-3 text-center">
                    <button type="submit" style={{
                        background: "brown",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                        padding: "8px"
                    }}>Zmień stan
                    </button>
                </div>
            </form>

        </Modal>
    )
}

export default ChangeStanItem;