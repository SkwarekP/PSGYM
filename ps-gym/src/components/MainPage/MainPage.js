import NavbarLayout from "../Layout/NavbarLayout";
import {Card, Col, Row} from "react-bootstrap";
import SidebarLayout from "../Layout/SidebarLayout";
import {useState} from "react";
import ContactCart from "../UI/ContactCart";
import "../../Assets/style/style.css";
import CalendarPicker from "../UI/Calendar";

function MainPage() {
    const [hideSidebar, setHideSideBar] = useState(false)
    const [isCartShow, setIsCartShow] = useState(false);

    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }


    const hideSidebarHandler = (e) => {
        e.preventDefault();
        setHideSideBar((prev) => !prev)
    }

    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onHide={hideSidebarHandler} hideOrShow={hideSidebar} onShowContact={showModalCart}/>
            {!hideSidebar && <SidebarLayout/>}
            <Col xs={10} lg={10} className="d-flex">
                <Col lg={10}>
                    <Card className="m-4">
                        <h1 className="text-center">Witaj uzytkowniku </h1>
                        <h4 className="text-center">
                            Cieszymy się, że jesteś częścią naszej organizacji PS&GYM, która jest na rynku już od 5 lat.
                        </h4>
                        <h4 className="text-center">
                            Mamy nadzieję na długotrwałą i owocną współpracę.
                        </h4>
                    </Card>
                    <Card className="m-5">
                        <h1 className="text-center">Wprowadzenie</h1>
                        <h4 className="text-center">
                            Aplikacja, którą masz przed sobą pozwala w pełni na zarządzanie obiektem PS&GYM Częstochowa.
                        </h4>
                        <h4 className="text-center">
                            Zakładka "Usługi" służy
                        </h4>
                        <h4 className="text-center">
                            Zakładka "Klienci" służy do zarządzania naszymi gośćmi
                        </h4>
                    </Card>
                </Col>
                <Col lg={2} className="justify-content-center">
                    <CalendarPicker/>
                </Col>

            </Col>


        </Row>
    )
}

export default MainPage;