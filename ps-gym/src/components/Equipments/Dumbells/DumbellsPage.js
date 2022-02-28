import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import DumbellsTable from "./DumbellsTable";
import NewDumbellsForm from "./NewDumbellsForm";
import EditDumbell from "./EditDumbell";

function DumbellsPage() {
    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalShown, setIsModalShown] = useState(false);
    const [dumbells, setDumbells] = useState([])
    const [isEditModalShown, setIsEditModalShown] = useState(false)
    const [tempDumbell, setTempDumbell] = useState({})
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
        fetch("http://localhost:5000/Dumbells", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setDumbells(() => res))
    }, [])

    const newDumbellHandler = (data) => {
        fetch("http://localhost:5000/Dumbells", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setDumbells((prev) => [...prev, res]))
        setIsModalShown(() => false)
    }

    const editDumbellHandler = (data, id) => {
        fetch(`http://localhost:5000/Dumbells/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setDumbells((prev) => prev.map(dumbell => dumbell._id === res._id ? res : dumbell)))
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
                    <DumbellsTable dumbells={dumbells} showEditModal={editModalShow} setTempDumbell={setTempDumbell}/>
                    {isModalShown && <NewDumbellsForm onClose={closeModalForm} onReceive={newDumbellHandler}/>}
                    {isEditModalShown && <EditDumbell onClose={editModalClose} onReceive={editDumbellHandler}
                                                      tempDumbell={tempDumbell}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default DumbellsPage;