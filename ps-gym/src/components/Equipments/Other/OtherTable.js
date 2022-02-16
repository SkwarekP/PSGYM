import classes from "../Machines/MachinesTable.module.css";
import {Card, Table} from "react-bootstrap";

function OtherTable() {

    return (
        <Card className={classes.cardMachines}>
            <div>
                <header className={`${classes.header}`}>Pozostałe</header>
            </div>
            <Table>
                <thead>
                <tr>
                    <th/>
                    <th>Producent</th>
                    <th>Nazwa</th>
                    <th>Przeznaczenie</th>
                    <th>Ilość</th>
                    <th>Data zakupu</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>zdjęcie</td>
                    <td>Hess</td>
                    <td>Guma rozciągliwa</td>
                    <td>fitness</td>
                    <td>4</td>
                    <td>20-02-2022</td>
                    <td>
                        <button className={classes.btnTable}>Edytuj</button>
                    </td>

                </tr>
                </tbody>
            </Table>
        </Card>
    )
}

export default OtherTable;