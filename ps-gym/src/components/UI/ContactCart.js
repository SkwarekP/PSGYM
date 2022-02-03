import Modal from "./Modal";
import classes from "./ContactCart.module.css"

function ContactCart(props) {
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.cartContact}>
                <h2>Dane kontaktowe administratora: </h2>
                <p>Patryk Skwara</p>
                <p>Ul. Kościuszki 155</p>
                <p>42-152 Opatów</p>
                <p>511973560</p>
                <p>patryk.skwara750@gmail.com</p>
                <button className={classes.contactButton} onClick={props.onClose}>Close</button>
            </div>
        </Modal>
    )

}

export default ContactCart;