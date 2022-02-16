import {Routes, Route} from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import ClientsPage from "./components/Clients/ClientsPage";
import EquipmentPage from "./components/Equipments/EquipmentPage";
import SupplementsPage from "./components/Supplements/SupplementsPage";
import SettingsPage from "./components/AccountSettings/SettingsPage";
import MachinesPage from "./components/Equipments/Machines/MachinesPage";
import LoadsPage from "./components/Equipments/Loads/LoadsPage";
import DumbellsPage from "./components/Equipments/Dumbells/DumbellsPage";
import BarbellsPage from "./components/Equipments/Barbells/BarbellsPage";
import OtherPage from "./components/Equipments/Other/OtherPage";

function App() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/PSGYM" element={<MainPage/>}/>
                <Route path="/Clients" element={<ClientsPage/>}/>
                <Route path="/Equipment" element={<EquipmentPage/>}/>
                <Route path="/Supplements" element={<SupplementsPage/>}/>
                <Route path="/Settings" element={<SettingsPage/>}/>
                <Route path="/Equipment/Machines" element={<MachinesPage/>}/>
                <Route path="/Equipment/Loads" element={<LoadsPage/>}/>
                <Route path="/Equipment/Dumbells" element={<DumbellsPage/>}/>
                <Route path="/Equipment/Barbells" element={<BarbellsPage/>}/>
                <Route path="/Equipment/Other" element={<OtherPage/>}/>
            </Routes>
        </Wrapper>
    );
}

export default App;
