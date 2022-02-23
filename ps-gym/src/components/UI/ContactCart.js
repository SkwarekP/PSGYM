import Modal from "./Modal";
import classes from "./ContactCart.module.css"

function ContactCart(props) {
    return (
        <Modal onClose={props.onClose}>
            <button className={classes.exit} onClick={props.onClose}>X</button>
            <div className={classes.cartContact}>
                <h2>Dane kontaktowe administratora: </h2>
                <p>Patryk Skwara</p>
                <p>Ul. Kościuszki 155</p>
                <p>42-152 Opatów</p>
                <p>511973560</p>
                <p>patryk.skwara750@gmail.com</p>
            </div>
        </Modal>
    )

}

export default ContactCart;