/*
import NavbarLayout from "../Layout/NavbarLayout";
import {Card, Col, Row} from "react-bootstrap";
import SidebarLayout from "../Layout/SidebarLayout";
import {useState} from "react";
import ContactCart from "../UI/ContactCart";
import "../../Assets/style/style.css";

function MainPage() {
    const [isCartShow, setIsCartShow] = useState(false);

    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    /!*useEffect(() => {
        fetch("http://localhost:5000/Clients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                setClients(data)
            })
    }, [])*!/


    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} className="d-flex pageWrapper page">
                <Col lg={10}>
                    <Card className="m-4 cardIntro">
                        <h1 className="text-center">Statystyki

                        </h1>
                    </Card>

                </Col>

            </Col>


        </Row>
    )
}

export default MainPage*/
