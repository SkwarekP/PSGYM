import {Col, Row} from "react-bootstrap";
import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {useState} from "react";
import Searchbox from "../UI/Searchbox";
import RegularClientsTable from "./Table/RegularClientsTable";
import MemberPSGYMClients from "./Table/MemberPSGYMClients";
import OthersClientsTable from "./Table/OthersClientsTable";

function ClientsPage() {
    const [isCartShow, setIsCartShow] = useState(false)

    const [regularClients, setRegularClients] = useState([
        {
            name: "Patryk",
            lastName: "Skwara",
            adres: "Ul. Kościuszki 155",
            email: "patryk.skwara750@gmail.com",
            nr_tel: 511973560,
            nr_karty_magnetycznej: 10001,
            data_utworzenia: "10-10-2022"
        },
        {
            name: "Patryk",
            lastName: "Skwara",
            adres: "Ul. Kościuszki 155",
            email: "patryk.skwara750@gmail.com",
            nr_tel: 511973560,
            nr_karty_magnetycznej: 10001,
            data_utworzenia: "10-10-2022"
        },
        {
            name: "Patryk",
            lastName: "Skwara",
            adres: "Ul. Kościuszki 155",
            email: "patryk.skwara750@gmail.com",
            nr_tel: 511973560,
            nr_karty_magnetycznej: 10001,
            data_utworzenia: "10-10-2022"
        },
        {
            name: "Patryk",
            lastName: "Skwara",
            adres: "Ul. Kościuszki 155",
            email: "patryk.skwara750@gmail.com",
            nr_tel: 511973560,
            nr_karty_magnetycznej: 10001,
            data_utworzenia: "10-10-2022"
        },
        {
            name: "Patryk",
            lastName: "Skwara",
            adres: "Ul. Kościuszki 155",
            email: "patryk.skwara750@gmail.com",
            nr_tel: 511973560,
            nr_karty_magnetycznej: 10001,
            data_utworzenia: "10-10-2022"
        },
        {
            name: "Patryk",
            lastName: "Skwara",
            adres: "Ul. Kościuszki 155",
            email: "patryk.skwara750@gmail.com",
            nr_tel: 511973560,
            nr_karty_magnetycznej: 10001,
            data_utworzenia: "10-10-2022"
        },
    ])
    const [membersClients, setMembersClients] = useState([
        {
            name: "Sebastian",
            lastName: "Biernacki",
            adres: "Ul. Kłobucka 222",
            email: "Sebastian.Biernacki@gmail.com",
            nr_tel: 666222333,
            nr_karty_magnetycznej: 10002,
            data_utworzenia: "11-10-2022"
        },
        {
            name: "Sebastian",
            lastName: "Biernacki",
            adres: "Ul. Kłobucka 222",
            email: "Sebastian.Biernacki@gmail.com",
            nr_tel: 666222333,
            nr_karty_magnetycznej: 10002,
            data_utworzenia: "11-10-2022"
        },
        {
            name: "Sebastian",
            lastName: "Biernacki",
            adres: "Ul. Kłobucka 222",
            email: "Sebastian.Biernacki@gmail.com",
            nr_tel: 666222333,
            nr_karty_magnetycznej: 10002,
            data_utworzenia: "11-10-2022"
        },
        {
            name: "Sebastian",
            lastName: "Biernacki",
            adres: "Ul. Kłobucka 222",
            email: "Sebastian.Biernacki@gmail.com",
            nr_tel: 666222333,
            nr_karty_magnetycznej: 10002,
            data_utworzenia: "11-10-2022"
        },
        {
            name: "Sebastian",
            lastName: "Biernacki",
            adres: "Ul. Kłobucka 222",
            email: "Sebastian.Biernacki@gmail.com",
            nr_tel: 666222333,
            nr_karty_magnetycznej: 10002,
            data_utworzenia: "11-10-2022"
        },
    ])
    const [otherClients, setOtherClients] = useState([
        {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        },
        {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        },
        {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        },
        {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        }, {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        }, {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        }, {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        }, {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        }, {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        }, {
            name: "Ania",
            lastName: "Zagalska",
            adres: "Ul. Kościuszki 78",
            email: "AniaZagalska@gmail.com",
            nr_tel: 997997997,
            nr_karty_magnetycznej: 10003,
            data_utworzenia: "12-10-2022"
        },

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
            <Col xs={10} lg={10} className="pageWrapper">
                <Col lg={10} className="clientsPage">
                    <Row className="m-5">
                        <Col xs={6} className="mt-2">
                            <button className="redBtn text-nowrap">Zarejestruj klienta</button>
                        </Col>
                        <Col xs={6} className="mt-3 text-center">
                            <Searchbox/>
                        </Col>
                    </Row>

                    <Row className="m-5">
                        <RegularClientsTable regularUsers={regularClients}/>
                    </Row>

                    <Row className="m-5">
                        <MemberPSGYMClients membersUsers={membersClients}/>
                    </Row>

                    <Row className="m-5">
                        <OthersClientsTable users={otherClients}/>
                    </Row>

                </Col>

            </Col>


        </Row>

    )
}

export default ClientsPage;