import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import MachinesTable from "./MachinesTable";
import NewMachinesForm from "./NewMachinesForm";


function MachinesPage() {
    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalShown, setIsModalShown] = useState(false)
    const [machines, setMachines] = useState([])

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

    useEffect(() => {
        fetch("http://localhost:5000/Machines", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setMachines(() => res))
    }, [])

    const newMachineHandler = (data) => {
        fetch("http://localhost:5000/Machines", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        })
            .then(res => res.json())
            .then(res => setMachines((prev) => [...prev, res]))
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
                    <MachinesTable machines={machines}/>
                    {isModalShown && <NewMachinesForm onClose={closeModalForm} onReceive={newMachineHandler}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default MachinesPage;

//@TODO implement useContext to handle modal window on the navbar.