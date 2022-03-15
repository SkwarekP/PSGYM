import LoginForm from "./LoginForm";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../store/user-context";

function Login() {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);

    const sendData = (data) => {
        fetch("http://localhost:5000/Users/Login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("token", res.token);
                let user = {
                    _id: res.user._id,
                    name: res.user.name,
                    lastName: res.user.lastName,
                    email: res.user.email,
                    number_tel: res.user.number_tel,
                    isAdmin: res.user.isAdmin,
                    picture: res.user.picture,
                    token: res.token,
                };
                setUser(() => user);
                console.log(user);
                return res;
            })
            .then((res) => {
                setTimeout(() => {
                    if (res.error) {
                        console.error(res.message);
                    } else {
                        console.log(res.message);
                        navigate("/Clients");
                    }
                }, 1000);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return <LoginForm onReceive={sendData}/>;
}

export default Login;
