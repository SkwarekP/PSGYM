import {Col} from "react-bootstrap";
import {Card, CardActions, CardContent, CardHeader, TextField} from "@mui/material";

function EmailChange() {

    return (
        <form>
            <Col sm={12}>
                <Card className="cardOptions">
                    <CardHeader title={<header>Zmiana adresu e-mail</header>}/>
                    <CardContent>
                        <TextField
                            label="Wprowadź hasło"
                            variant="standard"
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="Wprowadź adres e-mail"
                            variant="standard"
                            fullWidth
                            type="password"
                        />
                        <TextField
                            label="Powtórz adres e-mail"
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
        </form>
    )
}

export default EmailChange;