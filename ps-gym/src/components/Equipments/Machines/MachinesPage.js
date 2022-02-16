import ContactCart from "../../UI/ContactCart";
import NavbarLayout from "../../Layout/NavbarLayout";
import SidebarLayout from "../../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import MachinesTable from "./MachinesTable";
import NewMachinesForm from "./NewMachinesForm";


function MachinesPage() {
    const [isCartShow, setIsCartShow] = useState(false)

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
    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} className="pageWrapper">
                <Col lg={12} className="clientsPage">
                    <Row className="m-5">
                        <Col xs={3} className="mt-2">
                            <button className="redBtn text-nowrap" onClick={showModalForm}>Dodaj pozycję</button>
                        </Col>
                    </Row>
                    <MachinesTable/>
                    {isCartShow && <NewMachinesForm onClose={closeModalForm}/>}
                </Col>

            </Col>

        </Row>
    )
}

export default MachinesPage;

//@TODO implement useContext to handle modal window on the navbar.