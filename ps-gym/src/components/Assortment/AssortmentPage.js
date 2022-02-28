import ContactCart from "../UI/ContactCart";
import NavbarLayout from "../Layout/NavbarLayout";
import SidebarLayout from "../Layout/SidebarLayout";
import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import AssortmentList from "./AssortmentList";
import NewItem from "./NewItem";

function AssortmentPage() {

    const [isCartShow, setIsCartShow] = useState(false)
    const [isAddItemModalShow, setIsAddItemModalShow] = useState(false)
    const [assortment, setAssortment] = useState([])

    const showModalCart = () => {
        setIsCartShow(() => true)
    }

    const closeModalCart = () => {
        setIsCartShow(() => false)
    }

    const showAddItemModal = () => {
        setIsAddItemModalShow(() => true)
    }
    const closeAddItemModal = () => {
        setIsAddItemModalShow(() => false)
    }

    useEffect(() => {
        fetch("http://localhost:5000/assortment", {
            method: "GET", headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setAssortment(() => res))
    }, [])


    const changeStanOfItem = (stan) => {
        fetch(`http://localhost:5000/assortment/${stan.id}`, {
            method: "PUT", body: JSON.stringify(stan), headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setAssortment((prev) => prev.map(item => item._id === res._id ? res : item)))
    }

    const addProductHandler = (item) => {
        const formData = new FormData();
        formData.append("picture", item.picture)
        formData.append("title", item.title)
        formData.append("stan", item.stan)

        fetch("http://localhost:5000/assortment", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/form-data",
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(res => setAssortment((prev) => {
                return [...prev, res]
            }))
        setIsAddItemModalShow(() => false)
    }

    return (

        <Row>
            {isCartShow && <ContactCart onClose={closeModalCart}/>}
            <NavbarLayout onShowContact={showModalCart}/>
            <SidebarLayout/>
            <Col xs={10} lg={10} md={10} className="pageWrapper">
                <div style={{position: "fixed", left: "51%", marginTop: "10px"}}>
                    <button className="redBtn" onClick={showAddItemModal}>Dodaj pozycję</button>
                </div>
                <AssortmentList assortment={assortment} stan={changeStanOfItem}/>
                {isAddItemModalShow && <NewItem onClose={closeAddItemModal} onReceive={addProductHandler}/>}
            </Col>
        </Row>
    )
}

export default AssortmentPage;