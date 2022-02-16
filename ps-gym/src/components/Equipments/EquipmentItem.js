import {Col, Card} from "react-bootstrap";
import classes from './EquipmentItem.module.css'
import {useNavigate} from "react-router-dom";

function EquipmentItem(props) {
    const navigate = useNavigate();

    const NavigateTo = () => {
        const path = `/Equipment/${props.path}`;
        navigate(path);
    }

    return (
        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={classes.cardBody} onClick={NavigateTo}>
                <img src={props.photo} className={classes.cardImgTop} alt=""/>
                <h5 className={classes.cardTitle}>{props.title}</h5>
            </Card>
        </Col>

    )
}

export default EquipmentItem;