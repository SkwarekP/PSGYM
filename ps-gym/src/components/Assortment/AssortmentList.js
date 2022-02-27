import {CardGroup, Col} from "react-bootstrap";
import AssortmentItem from "./AssortmentItem";

function AssortmentList(props) {
    const onSendToMain = (stan) => {
        props.stan(stan)
    }

    return (
        <Col xs={9} md={12} lg={9} className="m-5">
            <CardGroup>
                {props.assortment.map((item) => (
                    <AssortmentItem key={item._id} id={item._id} title={item.title} photo={item.picture}
                                    stan={item.stan} onReceive={onSendToMain}/>
                ))}
            </CardGroup>
        </Col>
    )
}

export default AssortmentList;