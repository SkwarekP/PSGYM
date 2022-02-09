import classes from "./SidebarNavigation.module.css"
import {Link} from "react-router-dom";

function SidebarNavigation() {

    return (
        <header>
            <ul className={classes.sidebarMenuWrapper}>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/PSGYM" className={classes.active}>
                        <p className="m-auto">PS&GYM</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Clients">
                        <p className="m-auto">Klienci</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Equipment">
                        <p className="m-auto">Sprzęt</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Usługi</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/">
                        <p className="m-auto">Wydarzenia</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Supplements">
                        <p className="m-auto">Suplementy</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Settings">
                        <p className="m-auto">Ustawienia konta</p>
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