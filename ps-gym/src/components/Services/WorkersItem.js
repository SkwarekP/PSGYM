import {Card, Col} from "react-bootstrap";
import classes from "../Assortment/AssortmentItem.module.css";

function WorkersItem(props) {

    const triggerModal = () => {
        props.onShowWorkerInfo()
        props.individualWorker(props.id)
    }

    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className={classes.cardBody} onClick={triggerModal}>
                <img src={props.picture} className={classes.cardImgTop} alt=""/>
                <div className={classes.cardBd}>
                    <h5 className={classes.cardTitle}>{props.name} {props.lastName}</h5>
                    <p className={classes.cardText2}>
                        Email: {props.email}
                    </p>
                    <p className={classes.cardText2}>
                        Numer telefonu: {props.number_tel}
                    </p>
                    <p className={classes.cardText2}>
                        Funkcja: {props.function}
                    </p>

                </div>
            </Card>

        </Col>
    )
}

export default WorkersItem