import Modal from "../UI/Modal";
import {FormGroup} from "react-bootstrap";
import {useState} from "react";
import classes from "../UI/ContactCart.module.css";

function NewItem(props) {
    const [stan, setStan] = useState(0)
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")

    const newItemSender = (e) => {
        e.preventDefault()

        const data = {
            stan: stan,
            title: title,
            picture: picture
        }

        props.onReceive(data)
    }

    return (
        <Modal onClose={props.onClose}>
            <button className={classes.exit} onClick={props.onClose}>X</button>

            <form onSubmit={newItemSender}>
                <FormGroup className="text-center">
                    <label htmlFor="title" className="text-white" style={{fontSize: "18px"}}>Nazwa produktu</label>
                    <input
                        type="text"
                        className="form-control text-center mt-3"
                        style={{width: "300px", marginLeft: "150px"}}
                        name="title"
                        defaultValue={title}
                        onChange={(event) => {
                            setTitle(() => event.target.value)
                        }}
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <label htmlFor="stan" className="text-white mt-2" style={{fontSize: "18px"}}>Stan</label>
                    <input
                        type="number"
                        className="form-control text-center mt-3"
                        style={{width: "300px", marginLeft: "150px"}}
                        name="titleEvent"
                        defaultValue={stan}
                        onChange={(event) => {
                            setStan(() => +event.target.value)
                        }}
                    />
                </FormGroup>
                <FormGroup className="text-center">
                    <div className="mt-1">
                        <label htmlFor="picture" className="text-white mt-2"
                               style={{fontSize: "18px"}}> Zdjęcie </label>
                    </div>
                    <input
                        className="text-center mt-3"
                        style={{color: "#231F20", marginLeft: "165px"}}
                        type="file"
                        onChange={(e) => {
                            setPicture(() => e.target.files[0])
                        }}
                    />
                </FormGroup>
                <div className="m-3 text-center">
                    <button type="submit" style={{
                        background: "brown",
                        color: "white",
                        borderRadius: "10px",
                        border: "none",
                        padding: "8px",
                        marginTop: "10px"
                    }}>Dodaj produkt
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default NewItem