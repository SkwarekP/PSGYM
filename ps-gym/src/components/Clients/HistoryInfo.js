import Modal from "../UI/Modal";

function HistoryInfo(props) {

    return (
        <Modal onClose={props.onClose}>
            <div className="text-center">
                <label className="text-white">Historia wizyt w obiekcie PSGYM</label>
                < br/>
                < br/>
                <p className="text-white">{props.idCurrClient}</p>
                <p className="text-white">2022-03-02 10:30 - 2022-03-02 12:00</p>
            </div>
        </Modal>
    )
}

export default HistoryInfo;