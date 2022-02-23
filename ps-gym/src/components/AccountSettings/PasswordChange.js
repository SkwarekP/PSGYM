import {
    CardActions, CardContent, CardHeader, TextField, Card
} from "@mui/material";
import {Col} from 'react-bootstrap';

function PasswordChange() {

    return (<form>
            <Col sm={12}>
                <Card className="cardOptions">
                    <CardHeader title={<header>Zmiana hasła</header>}/>
                    <CardContent>
                        <TextField
                            label="Stare hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="Nowe hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="Powtórz hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                        />
                    </CardContent>
                    <CardActions>
                        <button className="redBtn m-1" type="submit" style={{borderRadius: "0"}}>
                            Zatwierdź
                        </button>
                    </CardActions>
                </Card>
            </Col>
        </form>)
}

export default PasswordChange;