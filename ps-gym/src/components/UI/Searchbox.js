import classes from './Searchbox.module.css'

function Searchbox() {

    return (
        <div className={classes.wrapper_searchbox}>
            <input type="text" placeholder="Wyszukaj"/>
            <span className={classes.underline}/>
        </div>
    )
}

export default Searchbox;