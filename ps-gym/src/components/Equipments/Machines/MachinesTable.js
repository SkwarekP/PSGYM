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
                    <th>Cena</th>
                    <th>Data zakupu</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                {props.machines.map((machine, idx) => (
                    <tr key={machine._id}>
                        <td>{idx + 1}.</td>
                        <td>{machine.serial_number}</td>
                        <td>{machine.name}</td>
                        <td>{machine.producent}</td>
                        <td>{machine.cena}zł</td>
                        <td>{machine.date}</td>
                        <td>
                            <button className={classes.btnTable}>Edytuj</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Card>

    )
}

export default MachinesTable;