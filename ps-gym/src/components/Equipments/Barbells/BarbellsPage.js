import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import BarbellsTable from "./BarbellsTable";
import NewBarbellForm from "./NewBarbellForm";
import EditBarbell from "./EditBarbell";

function BarbellsPage() {

    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalShown, setIsModalShown] = useState(false)
    const [barbells, setBarbells] = useState([])
    const [isEditModalShown, setIsEditModalShown] = useState(false)
    const [tempBarbell, setTempBarbell] = useState({})

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
        fetch("http://localhost:5000/Barbells", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setBarbells(() => res))
    }, [])

    const newBarbellHandler = (data) => {
        fetch("http://localhost:5000/Barbells", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setBarbells((prev) => [...prev, res]))
    }

    const editBarbellHandler = (data, id) => {
        fetch(`http://localhost:5000/Barbells/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setBarbells((prev) => prev.map(barbell => barbell._id === res._id ? res : barbell)))
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
                    <BarbellsTable barbells={barbells} showEditModal={editModalShow} setTempBarbell={setTempBarbell}/>
                    {isModalShown && <NewBarbellForm onClose={closeModalForm} onReceive={newBarbellHandler}/>}
                    {isEditModalShown && <EditBarbell onClose={editModalClose} onReceive={editBarbellHandler}
                                                      tempBarbell={tempBarbell}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default BarbellsPage;