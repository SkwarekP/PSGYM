import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {Col, Row, Container, Card} from "react-bootstrap";
import {useState} from "react";
import classes from "./SettingsPage.module.css"
import PasswordChange from "./PasswordChange";
import EmailChange from "./EmailChange";
import ProfilePictureChange from "./ProfilePictureChange";

function SettingsPage() {

    const [isCartShow, setIsCartShow] = useState(false);

    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }


    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} md={10} className="pageWrapper">
                <Container fluid>
                    <Row>
                        <Col xs={12} className="mt-5 mb-5">
                            <Card className="cardOptions m-0">
                                <Row>
                                    <Col xs={3} lg={3} className="m-3">
                                        <label htmlFor="fname" className={`mb-2`}>Imię:</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">Nazwisko:</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">E-mail:</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">Numer telefonu:</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">Stanowisko:</label>
                                        <div className="w-100"/>
                                    </Col>
                                    <Col xs={3} lg={1} md={1}/>
                                    <Col xs={4} lg={3} className="m-3">
                                        <label className="mb-2">Patryk</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">Skwara</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname"
                                               className="mb-2 personalData">patryk.skwara750@gmail.com</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">511973560</label>
                                        <div className="w-100"/>
                                        <label htmlFor="fname" className="mb-2 personalData">Kierownik</label>
                                        <div className="w-100"/>
                                    </Col>
                                    <Col xs={3} lg={3} className="m-3">
                                        <header className="text-center">Zmień zdjecie profilowe</header>
                                        <ProfilePictureChange/>
                                    </Col>

                                </Row>
                            </Card>
                        </Col>
                        <Row>
                            <Col sm={12} lg={6} md={6} xl={6}>
                                <PasswordChange/>
                            </Col>
                            <Col sm={12} lg={6} md={6} xl={6} className="m-lg-auto">
                                <EmailChange/>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </Col>

        </Row>
    )
}

export default SettingsPage;