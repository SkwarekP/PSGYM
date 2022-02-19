import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const sendData = (data) => {
        fetch("http://localhost:5000/Users/Login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("token", res.token)
                let user = {
                    name: res.name,
                    lastName: res.lastName,
                    email: res.email,
                    number_tel: res.number_tel,
                    isAdmin: res.isAdmin,
                }
            })
            .then(() => {
                setTimeout(() => {
                    navigate("/PSGYM")

                }, 1000)
            })

        //navigate("/PSGYM")
    }

    return <LoginForm onReceive={sendData}/>

}

export default Login;