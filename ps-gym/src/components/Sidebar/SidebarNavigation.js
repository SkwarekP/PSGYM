import classes from "./SidebarNavigation.module.css"
import {Link} from "react-router-dom";

function SidebarNavigation() {

    return (
        <header>
            <ul className={classes.sidebarMenuWrapper}>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/" className={classes.active}>
                        <p className="m-auto">PS&GYM</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Zakladka 1</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Klienci</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Wydarzenia</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Asortyment</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Wyloguj</p>
                    </Link>
                </li>
            </ul>
        </header>
    )

}

export default SidebarNavigation;