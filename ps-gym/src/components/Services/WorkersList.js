import {CardGroup, Col} from "react-bootstrap";
import WorkersItem from "./WorkersItem";

function WorkersList(props) {

    const onSendIndividualWorkerEvents = (events) => {
        props.onReceiveIndividualWorkerEvents(events)
    }

    return (
        <Col xs={9} md={12} lg={10} className="m-5">
            <CardGroup>
                {props.workers.map((item) => (
                    <WorkersItem
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        lastName={item.lastName}
                        email={item.email}
                        number_tel={item.number_tel}
                        picture={item.picture}
                        function={item.function}
                        events={item.events}
                        onShowWorkerInfo={props.onShowWorkerInfo}
                        individualWorker={onSendIndividualWorkerEvents}
                    />
                ))}
            </CardGroup>
        </Col>
    )
}

export default WorkersList