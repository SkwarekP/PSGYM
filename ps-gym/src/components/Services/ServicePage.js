import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import WorkersList from "./WorkersList";
import WorkerInfo from "./WorkerInfo";


function ServicePage() {

    const [isCartShow, setIsCartShow] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [individualEvents, setIndividualEvents] = useState(null)
    const [workers, setWorkers] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/Workers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setWorkers(() => res))
    }, [])

    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    const showWorkerInfo = (events) => {
        setIsModalOpen(() => true)
    }

    const closeWorkerInfo = () => {
        setIsModalOpen(() => false)
    }

    const individualWorkerEvents = (events) => {
        setIndividualEvents(() => events)
    }

    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} className="pageWrapper">
                <Col lg={11} className="clientsPage">
                    <WorkersList workers={workers} onShowWorkerInfo={showWorkerInfo}
                                 onReceiveIndividualWorkerEvents={individualWorkerEvents}/>

                </Col>
                {isModalOpen && <WorkerInfo onClose={closeWorkerInfo} individualEvents={individualEvents}/>}
            </Col>

        </Row>
    )
}

export default ServicePage