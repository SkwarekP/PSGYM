import {Col, Row} from "react-bootstrap";
import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {useEffect, useState} from "react";
import Searchbox from "../UI/Searchbox";
import ClientsTable from "./Table/ClientsTable";
import RegisterClientForm from "./RegisterClientForm";
import EditClient from "./EditClient";

function ClientsPage() {
    const [isCartShow, setIsCartShow] = useState(false)
    const [isFormShow, setIsFormShow] = useState(false);
    const [isEditModalFormShow, setIsEditModalFormShow] = useState(false);
    const [searchUsers, setSearchUsers] = useState("");
    const [clients, setClients] = useState([])
    const [tempClient, setTempClient] = useState({})

    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    const showForm = () => {
        setIsFormShow(() => true);
    }

    const closeForm = () => {
        setIsFormShow(() => false);
    }
    const showEditModalForm = () => {
        setIsEditModalFormShow(() => true)
    }
    const closeEditModalForm = () => {
        setIsEditModalFormShow(() => false)
    }

    const searchByEmail = data => {
        setSearchUsers(() => data);
    }

    const newClientAdd = (data) => {
        fetch("http://localhost:5000/clients", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then((response) => setClients((prev) => [...prev, response]))

        setIsFormShow(() => false);
    }

    const editClientHandler = data => {
        fetch(`http://localhost:5000/clients/${data._id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(res => {
                setClients((prev) => prev.map((item) => item._id === res._id ? res : item))
                setIsEditModalFormShow(() => false)
            })
    }

    useEffect(() => {
        fetch("http://localhost:5000/clients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setClients(() => data))
    }, [])


    return (
        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} className="pageWrapper">
                <Col lg={12} className="clientsPage">
                    <Row className="m-5">
                        <Col xs={3} className="mt-2">
                            <button className="redBtn text-nowrap" onClick={showForm}>Zarejestruj klienta</button>
                        </Col>
                        <Col xs={3} className="mt-3">
                            <Searchbox onReceive={searchByEmail}/>
                        </Col>
                    </Row>
                    <ClientsTable
                        clients={clients}
                        searchUsers={searchUsers}
                        onShowEdit={showEditModalForm}
                        onClose={closeEditModalForm}
                        setTempClient={setTempClient}
                    />
                    {isFormShow && <RegisterClientForm onClose={closeForm} onRegistered={newClientAdd}/>}
                    {isEditModalFormShow && <EditClient client={tempClient} onClose={closeEditModalForm}
                                                        editedClientData={editClientHandler}/>}
                </Col>

            </Col>

        </Row>

    )
}

export default ClientsPage;