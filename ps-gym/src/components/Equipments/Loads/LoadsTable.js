import classes from "../../Clients/Table/Tables.module.css";
import {Card, Table} from "react-bootstrap";

function LoadsTable() {
    return (
        <Card className={classes.ClientCard}>
            <div>
                <header className={`${classes.header}`}>Obciążenia</header>
            </div>
            <Table>
                <thead>
                <tr>
                    <th/>
                    <th>Producent</th>
                    <th>Typ</th>
                    <th>Ilość</th>
                    <th>Waga</th>
                    <th>Data zakupu</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>zdjecie</td>
                    <td>Hess</td>
                    <td>Gumowe</td>
                    <td>20</td>
                    <td>10 kg</td>
                    <td>20-02-2015</td>
                    <td>
                        <button className={classes.btnTable}>Edytuj</button>
                    </td>

                </tr>
                </tbody>
            </Table>
        </Card>
    )

}

export default LoadsTable;