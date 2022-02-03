import ReactDom from 'react-dom';
import classes from "./Modal.module.css"

const Backdrop = (props) => {
    return <div className={classes.backDrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}

const portal = document.getElementById("overlay"); // let the dom know where portal my backdrop and modaloverlay components

const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portal)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </>
    )
}
export default Modal;