import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import EquipmentList from "./EquipmentList";
import loads from "../../Assets/images/loads.jpg"
import dumbbells from "../../Assets/images/hantle3.jpg"
import barbells from "../../Assets/images/sztangi.jpg"
import others from "../../Assets/images/others.jpg"
import machines from "../../Assets/images/machines.jpg"

function EquipmentPage(props) {

    const [isCartShow, setIsCartShow] = useState(false)

    const [equipment, setEquipment] = useState([
        {
            id: 1,
            title: "Maszyny",
            navigate: "Machines",
            photo: machines
        },
        {
            id: 2,
            title: "Obciążenia",
            navigate: "Loads",
            photo: loads,
        },
        {
            id: 3,
            title: "Hantle",
            navigate: "Dumbells",
            photo: dumbbells,
        },
        {
            id: 4,
            title: "Sztangi",
            navigate: "Barbells",
            photo: barbells,
        },
        {
            id: 5,
            title: "Pozostałe",
            navigate: "other",
            photo: others
        }
    ])

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
            <Col xs={10} lg={10} className="pageWrapper mt-4">
                <EquipmentList equipment={equipment}/>
            </Col>

        </Row>
    )
}

export default EquipmentPage;