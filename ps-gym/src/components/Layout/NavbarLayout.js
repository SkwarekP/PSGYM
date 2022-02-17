import {Button, Col, Container, Row} from "react-bootstrap";
import classes from "./NavbarLayour.module.css";
import Logo from "../../Assets/images/logo.png"

function NavbarLayout(props) {
    return (
        <Container>
            <Row>
                <Col md={12} lg={12} className={classes.navbarTop}>
                    <Col sm={2} className="text-white text-center">
                        <Button className={classes.wrapperContact} style={{width: "auto"}}>
                            Powiadomienia
                        </Button>
                    </Col>
                    <Col sm={8} className="text-white text-center">
                        <img src={Logo} alt="" className="mt-4"/>
                    </Col>
                    <Col sm={2} className="text-white text-center">
                        <Button className={classes.wrapperContact} onClick={props.onShowContact}>Kontakt</Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    )


}

export default NavbarLayout;