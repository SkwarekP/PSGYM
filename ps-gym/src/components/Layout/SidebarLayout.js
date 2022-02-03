import {Col, Row} from "react-bootstrap";
import classes from "./SidebarLayout.module.css"
import person from "../../Assets/images/sidebarImg.jpg"
import SidebarNavigation from "../Sidebar/SidebarNavigation";

function SidebarLayout() {
    return (
        <Col sm={2} className={classes.sidebarMenuContainer}>
            <div className={classes.sidebarCnt}>
                <div className={classes.sidebarProfileContainer}>
                    <p className={classes.sidebarProfileImg}>
                        <img src={person} alt="p"/>
                    </p>
                    <p className={classes.sidebarYourName}>Patryk Skwara</p>
                    <p className={classes.sidebarYourName}>Administrator</p>
                </div>
                <div className={classes.line_hr}>
                    <hr/>
                </div>
                <Row>
                    <Col xs={4} sm={5} md={2} xl={3} lg={1}/>
                    <Col xs={5} sm={2} md={8} xl={6} lg={8}>
                        <SidebarNavigation/>
                    </Col>
                    <Col xs={3} sm={5} md={2} xl={3} lg={1}/>
                </Row>
            </div>
        </Col>
    )

}

export default SidebarLayout;