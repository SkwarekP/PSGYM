import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const sendData = (data) => {
        console.log(data);
        navigate("/PSGYM")
    }

    return <LoginForm onReceive={sendData}/>

}

export default Login;