import {
    CardActions, CardContent, CardHeader, TextField, Card
} from "@mui/material";
import {Col} from 'react-bootstrap';
import {useState} from "react";

function PasswordChange(props) {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatPassword] = useState("");
    const [isChangePassword, setIsChangePassword] = useState(false);
    const [message, setMessage] = useState("");

    const sendDataHandler = (e) => {
        e.preventDefault();
        if (newPassword !== repeatNewPassword) {
            setIsChangePassword(() => false);
            setMessage(() => "Niepoprawne dane!");
            setOldPassword("");
            setNewPassword("");
            setRepeatPassword("");
        } else if (newPassword === "" || oldPassword === "" || repeatNewPassword === ""
        ) {
            setIsChangePassword(() => false);
            setMessage(() => "Pola nie mogą być puste!");
        } else {
            const data = {
                old_password: oldPassword,
                new_password: newPassword,
            };
            setIsChangePassword(() => true);
            setMessage(() => "Pomyślnie zmieniono hasło");
            props.password(data);
            setOldPassword("");
            setNewPassword("");
            setRepeatPassword("");
        }
    };


    return (
        <form onSubmit={sendDataHandler}>
            <Col sm={12}>
                <Card className="cardOptions">
                    <CardHeader title={<header>Zmiana hasła</header>}/>
                    <CardContent>
                        <TextField
                            label="Stare hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                            value={oldPassword}
                            onChange={(event) => setOldPassword(() => event.target.value)}
                        />
                        <TextField
                            label="Nowe hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                            value={newPassword}
                            onChange={(event) => setNewPassword(() => event.target.value)}
                        />
                        <TextField
                            label="Powtórz hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                            value={repeatNewPassword}
                            onChange={(e) => setRepeatPassword(() => e.target.value)}
                        />
                    </CardContent>
                    <CardActions>
                        <button className="redBtn m-1" type="submit" style={{borderRadius: "0"}}>
                            Zatwierdź
                        </button>

                    </CardActions>
                    {isChangePassword && <p style={{color: "#90EE90"}} className="m-2">{message}</p>}
                    {!isChangePassword && <p style={{color: "red"}} className="m-2">{message}</p>}
                </Card>
            </Col>
        </form>
    )
}

export default PasswordChange;