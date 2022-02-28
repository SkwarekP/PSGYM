import Modal from "../UI/Modal";

function WorkerInfo(props) {

    return (
        <Modal onClose={props.onClose}>
            <div className="text-center">
                <label className="text-white">Przydzielone wydarzenia:</label>
                < br/>
                <span className="text-white mt-3">{props.tempId}</span>
            </div>
        </Modal>
    )
}

export default WorkerInfo