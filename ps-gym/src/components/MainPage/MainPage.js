import NavbarLayout from "../Layout/NavbarLayout";
import {Row} from "react-bootstrap";
import SidebarLayout from "../Layout/SidebarLayout";
import {useState} from "react";
import ContactCart from "../UI/ContactCart";

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
        </Row>
    )
}

export default MainPage;