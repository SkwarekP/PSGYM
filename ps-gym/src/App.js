import {Routes, Route} from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import ClientsPage from "./components/Clients/ClientsPage";
import EquipmentPage from "./components/Equipments/EquipmentPage";
import SupplementsPage from "./components/Supplements/SupplementsPage";
import SettingsPage from "./components/AccountSettings/SettingsPage";

function App() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/PSGYM" element={<MainPage/>}/>
                <Route path="/Clients" element={<ClientsPage/>}/>
                <Route path="/Equipment" element={<EquipmentPage/>}/>
                <Route path="/Supplements" element={<SupplementsPage/>}/>
                <Route path="/Settings" element={<SettingsPage />} />
            </Routes>
        </Wrapper>
    );
}

export default App;
