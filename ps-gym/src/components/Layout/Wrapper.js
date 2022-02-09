import classes from "./Wrapper.module.css"
import {Container} from "react-bootstrap";

function Wrapper(props) {
    return (
        <Container fluid className={classes.containerFluid}>
            {props.children}
        </Container>
    );

}

export default Wrapper;