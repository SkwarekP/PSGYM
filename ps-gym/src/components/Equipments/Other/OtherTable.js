import classes from "../Machines/MachinesTable.module.css";
import {Card, Table} from "react-bootstrap";

function OtherTable(props) {

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
                    <th>Cena za sztukę</th>
                    <th>Data zakupu</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                {props.others.map((item, idx) => (
                    <tr key={item._id}>
                        <td>{idx + 1}.</td>
                        <td>{item.producent}</td>
                        <td>{item.name}</td>
                        <td>{item.destination}</td>
                        <td>{item.amount}szt.</td>
                        <td>{item.price}zł</td>
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

export default OtherTable;