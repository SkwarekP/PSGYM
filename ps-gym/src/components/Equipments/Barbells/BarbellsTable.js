import classes from "../../Clients/Table/Tables.module.css";
import {Card, Table} from "react-bootstrap";

function BarbellsTable(props) {

    return (
        <Card className={classes.ClientCard}>
            <div>
                <header className={`${classes.header}`}>Sztangi</header>
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
                {props.barbells.map((barbell, idx) => (
                    <tr key={barbell._id}>
                        <td>{idx + 1}.</td>
                        <td>{barbell.producent}</td>
                        <td>{barbell.type}</td>
                        <td>{barbell.amount}szt.</td>
                        <td>{barbell.weight}kg</td>
                        <td>{barbell.price}zł</td>
                        <td>{barbell.date}</td>
                        <td>
                            <button className={classes.btnTable} onClick={() => {
                                props.setTempBarbell(() => barbell)
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

export default BarbellsTable;