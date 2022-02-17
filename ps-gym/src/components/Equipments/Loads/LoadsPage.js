import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import LoadsTable from "./LoadsTable";
import NewLoadsForm from "./NewLoadsForm";

function LoadsPage() {

    const [loads, setLoads] = useState([])
    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalShown, setIsModalShown] = useState(false)
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
        fetch("http://localhost:5000/Loads", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setLoads(() => res))
    }, [])

    const newLoadHandler = (data) => {
        fetch("http://localhost:5000/Loads", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setLoads((prev) => [...prev, res]))
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
                    <LoadsTable loads={loads}/>
                    {isModalShown && <NewLoadsForm onClose={closeModalForm} onReceive={newLoadHandler}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default LoadsPage;