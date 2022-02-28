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
                    <th>Cena za sztukę</th>
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
                        <td>{item.amount}szt.</td>
                        <td>{item.weight}kg</td>
                        <td>{item.price}zł</td>
                        <td>{item.date}</td>
                        <td>
                            <button className={classes.btnTable} onClick={() => {
                                props.setTempDumbell(() => item)
                                props.showEditModal()
                            }}>Edytuj
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Card>
    )
}

export default DumbellsTable;