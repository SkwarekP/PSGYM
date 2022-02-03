import {Button, Col, Container, Row} from "react-bootstrap";
import classes from "./NavbarLayour.module.css"

function NavbarLayout(props) {
    return (
        <Container>
            <Row className="m-auto">
                <Col md={12} lg={12} className={classes.navbarTop}>
                    <Col sm={2} className="text-white text-center">
                        <Button className={classes.wrapperContact}
                                onClick={props.onHide}>{props.hideOrShow ? "Pokaż" : "Ukryj"}
                        </Button>
                    </Col>
                    <Col sm={8} className="text-white text-center">
                        <h1 className="text-white"> PSGYM FITNESS CLUB</h1>
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