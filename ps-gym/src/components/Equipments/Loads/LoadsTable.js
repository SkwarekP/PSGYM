import classes from "../../Clients/Table/Tables.module.css";
import {Card, Table} from "react-bootstrap";

function LoadsTable(props) {
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
                    <th>Cena</th>
                    <th>Data zakupu</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                {props.loads.map((item, idx) => (
                    <tr key={item._id}>
                        <td>{idx + 1}</td>
                        <td>{item.producent}</td>
                        <td>{item.type}</td>
                        <td>{item.amount} sztuk</td>
                        <td>{item.weight}kg</td>
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

export default LoadsTable;