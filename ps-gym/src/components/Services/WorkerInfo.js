import Modal from "../UI/Modal";
import classes from "../UI/ContactCart.module.css";

function WorkerInfo(props) {

    return (
        <Modal onClose={props.onClose}>
            <button className={classes.exit} onClick={props.onClose}>X</button>
            <div className="text-center">
                <label className="text-white">Przydzielone wydarzenia:</label>
                < br/>
                < br/>
                {props.individualEvents.map((event, idx) => (
                    <ul key={event._id} className="text-white">
                        {idx + 1}.
                        <li>Nazwa: {event.title}</li>
                        <li>Data rozpoczęcia: {event.start}</li>
                        <li>Godzina rozpoczęcia: {event.timeStart}</li>

                    </ul>
                ))}
            </div>
        </Modal>
    )
}

export default WorkerInfo