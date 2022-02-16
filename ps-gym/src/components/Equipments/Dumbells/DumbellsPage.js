import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import DumbellsTable from "./DumbellsTable";
import NewDumbellsForm from "./NewDumbellsForm";

function DumbellsPage() {
    const [isCartShow, setIsCartShow] = useState(false)
    const [dumbells, setDumbells] = useState([])
    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    const showModalForm = () => {
        setIsCartShow(() => true)
    }
    const closeModalForm = () => {
        setIsCartShow(() => false)
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
                    <DumbellsTable dumbells={dumbells}/>
                    {isCartShow && <NewDumbellsForm onClose={closeModalForm}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default DumbellsPage;