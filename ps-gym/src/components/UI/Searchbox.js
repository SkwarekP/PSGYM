import classes from './Searchbox.module.css'

function Searchbox(props) {

    return (
        <div className={classes.wrapper_searchbox}>
            <input type="text" placeholder="@email..." onChange={(event) => props.onReceive(event.target.value)}/>
            <span className={classes.underline}/>
        </div>
    )
}

export default Searchbox;