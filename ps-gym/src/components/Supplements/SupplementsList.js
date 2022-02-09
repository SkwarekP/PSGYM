import {CardGroup, Col} from "react-bootstrap";
import SupplementsItem from "./SupplementsItem";

function SupplementsList(props) {

    return (
        <Col xs={10}>
            <CardGroup>
                {props.supplies.map((item) => (
                    <SupplementsItem key={Math.random()} title={item.title} photo={item.photo}/>
                ))}
            </CardGroup>
        </Col>
    )
}

export default SupplementsList;