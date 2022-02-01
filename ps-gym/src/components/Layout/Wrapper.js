import classes from "./Wrapper.module.css"

function Wrapper(props) {
    return (
        <div className={classes.containerFluid}>
            {props.children}
        </div>
    );

}

export default Wrapper;