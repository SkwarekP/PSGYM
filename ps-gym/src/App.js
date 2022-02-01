import {Routes, Route} from "react-router-dom";
import Wrapper from "./components/Layout/Wrapper";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <Wrapper>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/PSGYM" element={<MainPage/>}/>
            </Routes>
        </Wrapper>
    );
}

export default App;
