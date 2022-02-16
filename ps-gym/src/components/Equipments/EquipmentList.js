import {CardGroup, Row, Col} from "react-bootstrap";
import EquipmentItem from "./EquipmentItem";

function EquipmentList(props) {

    return (
        <Col xs={10}>
            <Row>
                <CardGroup>
                    {props.equipment.map((item) => (
                        <EquipmentItem key={item.id} title={item.title} photo={item.photo} id={item.id}
                                       path={item.navigate}/>
                    ))}
                </CardGroup>
            </Row>
        </Col>
    )
}

export default EquipmentList;