import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import OtherTable from "./OtherTable";
import NewOtherForm from "./NewOtherForm";
import EditOther from "./EditOther";

function OtherPage() {
    const [others, setOthers] = useState([])
    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalShown, setIsModalShown] = useState(false)
    const [isEditModalShown, setIsEditModalShown] = useState(false)
    const [tempOther, setTempOther] = useState({})
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
        fetch("http://localhost:5000/Others", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setOthers(() => res))
    }, [])

    const newOtherHandler = (data) => {
        fetch("http://localhost:5000/Others", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setOthers((prev) => [...prev, res]))
    }

    const editOtherHandler = (data, id) => {
        fetch(`http://localhost:5000/Others/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setOthers((prev) => prev.map(other => other._id === res._id ? res : other)))
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
                    <OtherTable others={others} showEditModal={editModalShow} setTempOther={setTempOther}/>
                    {isModalShown && <NewOtherForm onClose={closeModalForm} onReceive={newOtherHandler}/>}
                    {isEditModalShown &&
                        <EditOther onClose={editModalClose} onReceive={editOtherHandler} tempOther={tempOther}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default OtherPage;