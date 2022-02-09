import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import SupplementsList from "./SupplementsList";
import creatine from "../../Assets/images/creatine.jpg"

function SupplementsPage() {

    const [hideSidebar, setHideSideBar] = useState(false)
    const [isCartShow, setIsCartShow] = useState(false)
    const [supplies, setSupplies] = useState([
        {title: "Kreatyna", photo: creatine},
        {title: "Przedtreningówki", photo: creatine},
        {title: "Odżywki białkowe", photo: creatine},
        {title: "Witaminy", photo: creatine},
        {title: "Batony proteinowe", photo: creatine},
        {title: "Aminokwasy", photo: creatine},
        {title: "Napoje izotoniczne", photo: creatine},
        {title: "Odzież klubowa", photo: creatine},
        {title: "Pozostałe", photo: creatine}
    ])

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
            <Col xs={10} lg={10} md={10} className="pageWrapper">
                {/*                <Col xl={10} lg={10} md={10} className="mt-4 page">*/}
                <SupplementsList supplies={supplies}/>
                {/*
                </Col>
*/}
            </Col>

        </Row>
    )
}

export default SupplementsPage;