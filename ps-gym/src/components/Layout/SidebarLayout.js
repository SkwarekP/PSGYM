import {Col, Row} from "react-bootstrap";
import classes from "./SidebarLayout.module.css"
import SidebarNavigation from "../Sidebar/SidebarNavigation";
import {useContext} from "react";
import {UserContext} from "../../store/user-context";

function SidebarLayout() {
    const {user} = useContext(UserContext)

    return (
        <Col sm={2} className={classes.sidebarMenuContainer}>
            <div className={classes.sidebarCnt}>
                <div className={classes.sidebarProfileContainer}>
                    <p className={classes.sidebarProfileImg}>
                        <img src={user.picture} alt="p"/>
                    </p>
                    <p className={classes.sidebarYourName}>{user.name + " " + user.lastName}</p>
                    <p className={classes.sidebarYourName}>{user.isAdmin ? "Administrator" : "Pracownik"}</p>
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