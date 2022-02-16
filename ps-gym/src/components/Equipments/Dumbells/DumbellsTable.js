import classes from "../Machines/MachinesTable.module.css"
import {Card, Table} from "react-bootstrap";

function DumbellsTable(props) {

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
                {props.dumbells.map((item, idx) => (
                    <tr key={item._id}>
                        <td>{idx + 1}</td>
                        <td>{item.producent}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.weight}</td>
                        <td>{item.date}</td>
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

export default DumbellsTable;