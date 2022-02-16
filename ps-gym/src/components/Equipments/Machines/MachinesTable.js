import classes from "./MachinesTable.module.css"
import {Card, Table} from "react-bootstrap";

function MachinesTable(props) {


    return (
        <Card className={classes.cardMachines}>
            <div>
                <header className={`${classes.header}`}>Maszyny</header>
            </div>
            <Table>
                <thead>
                <tr>
                    <th/>
                    <th>Numer seryjny</th>
                    <th>Nazwa</th>
                    <th>Producent</th>
                    <th>Data zakupu</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>zdjecie</td>
                    <td>9</td>
                    <td>8</td>
                    <td>7</td>
                    <td>6</td>
                    <td>
                        <button className={classes.btnTable}>Edytuj</button>
                    </td>

                </tr>
                </tbody>
            </Table>
        </Card>

    )
}

export default MachinesTable;