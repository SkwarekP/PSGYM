import classes from "../Machines/MachinesTable.module.css"
import {Card, Table} from "react-bootstrap";

function DumbellsTable() {

    return (
        <Card className={classes.cardMachines}>
            <div>
                <header className={`${classes.header}`}>Hantle</header>
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
                    <td>Gryf</td>
                    <td>5</td>
                    <td>2kg</td>
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

export default DumbellsTable;