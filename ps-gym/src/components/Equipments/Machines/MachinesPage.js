import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import MachinesTable from "./MachinesTable";
import NewMachinesForm from "./NewMachinesForm";
import EditMachine from "./EditMachine";
import useGet from "../../../hooks/useGet";


function MachinesPage() {
    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalShown, setIsModalShown] = useState(false)
    const [isEditModalShown, setIsEditModalShown] = useState(false)
    const [machines, setMachines] = useState([])
    const [tempMachine, setTempMachine] = useState({})
    const fetchMachines = useGet("http://localhost:5000/Machines")


    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    const showModalForm = () => {
        setIsModalShown(() => true)
    }
    const closeModalForm = () => {
        setIsModalShown(() => false)
    }

    const editModalShow = () => {
        setIsEditModalShown(() => true)
    }
    const editModalClose = () => {
        setIsEditModalShown(() => false)
    }

    useEffect(() => {
        setMachines(() => fetchMachines)
    }, [fetchMachines])

    const newMachineHandler = (data) => {
        fetch("http://localhost:5000/Machines", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setMachines((prev) => [...prev, res]))
    }

    const editMachineHandler = (data, id) => {
        fetch(`http://localhost:5000/Machines/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setMachines((prev) => prev.map(machine => machine._id === res._id ? res : machine)))
        setIsEditModalShown(() => false)
    }
    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} className="pageWrapper">
                <Col lg={11} className="clientsPage">
                    <Row className="m-5">
                        <Col xs={3} className="mt-2">
                            <button className="redBtn text-nowrap" onClick={showModalForm}>Dodaj pozycję</button>
                        </Col>
                    </Row>
                    <MachinesTable machines={machines} showEditModal={editModalShow} setTempMachine={setTempMachine}/>
                    {isModalShown && <NewMachinesForm onClose={closeModalForm} onReceive={newMachineHandler}/>}
                    {isEditModalShown && <EditMachine onClose={editModalClose} onReceive={editMachineHandler}
                                                      tempMachine={tempMachine}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default MachinesPage;

//@TODO implement useContext to handle modal window on the navbar.