import {Button, Col, Container, Row} from "react-bootstrap"
import classes from "./NavbarLayour.module.css"
import Logo from "../../Assets/images/logo.png"
import Clock from 'react-clock'
import {useEffect, useState} from "react"
import 'react-clock/dist/Clock.css'
import "./clock.css"


function NavbarLayout(props) {
    const [timeClock, setTimeClock] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(
            () => setTimeClock(new Date()),
            1000
        );

        return () => {
            clearInterval(interval)
        };
    }, [])
    return (
        <Container>
            <Row>
                <Col md={12} lg={12} className={classes.navbarTop}>
                    <Col sm={2} className="text-center">
                        <Clock value={timeClock} className={`${classes.clock} ${classes.reactClock__mark__body}`}/>
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