import classes from "../Clients/Table/Tables.module.css";
import {Card, Table} from "react-bootstrap";

function UsersTable(props) {

    return (
        <Card className={classes.ClientCard}>
            <div>
                <header className={`${classes.header} `}>Użytkownicy</header>
            </div>
            <Table className="mt-2">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Adres e-mail</th>
                    <th>Numer telefonu</th>
                    <th>Rola</th>
                    <th>Data utworzenia</th>
                </tr>
                </thead>
                <tbody>

                {props.users.map((item) => (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.number_tel}</td>
                        <td>{item.isAdmin ? "Administrator" : "Pracownik"}</td>
                        <td>{item.createdAt}</td>

                    </tr>
                ))}
                </tbody>
            </Table>
        </Card>
    )
}

export default UsersTable