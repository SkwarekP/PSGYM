import classes from "./SidebarNavigation.module.css"
import {Link} from "react-router-dom";
import {UserContext} from "../../store/user-context";
import {useContext} from "react";
import {EventNoteOutlined} from "@mui/icons-material";
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

function SidebarNavigation() {
    const {user, setUser} = useContext(UserContext)
    const logout = () => {
        setUser(() => {
            return {
                token: localStorage.removeItem("token"),
                name: "",
                lastName: "",
                email: "",
                number_tel: 0,
                isAdmin: false,
                picture: "",
            }
        })
        console.log("User log-out")
    }

    return (
        <header>
            <ul className={classes.sidebarMenuWrapper}>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Clients">
                        <PeopleAltOutlinedIcon/>
                        <p className="m-auto">Klienci</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Equipment">
                        <ConstructionOutlinedIcon/>
                        <p className="m-auto">Sprzęt</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Services">
                        <PhoneInTalkOutlinedIcon/>
                        <p className="m-auto">Pracownicy</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Events">
                        <EventNoteOutlined/>
                        <p className="m-auto">Wydarzenia</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Assortments">
                        <ShopOutlinedIcon/>
                        <p className="m-auto">Asortyment</p>
                    </Link>
                </li>
                {user.isAdmin && <li className={classes.sidebarMenuItem}>
                    <Link to="/Users">
                        <GroupAddOutlinedIcon/>
                        <p className="m-auto">Użytkownicy</p>
                    </Link>
                </li>}
                <li className={classes.sidebarMenuItem}>
                    <Link to="/Settings" className={classes.active}>
                        <ManageAccountsOutlinedIcon/>
                        <p className="m-auto">Ustawienia</p>
                    </Link>
                </li>
                <li className={classes.sidebarMenuItem} onClick={logout}>
                    <Link to="/">
                        <MeetingRoomOutlinedIcon/>
                        <p className="m-auto">Wyloguj</p>
                    </Link>
                </li>
            </ul>
        </header>
    )

}

export default SidebarNavigation;