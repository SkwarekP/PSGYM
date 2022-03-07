import {Card, Table} from "react-bootstrap";
import classes from "./Tables.module.css";

function ClientsTable(props) {

    return (
        <Card className={classes.ClientCard}>
            <div>
                <header className={`${classes.header}`}>Klienci</header>
            </div>
            <Table>
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Adres</th>
                    <th>Adres e-mail</th>
                    <th>Numer telefonu</th>
                    <th>Numer karty magnetycznej</th>
                    <th>Karnet</th>
                    <th>Aktywny</th>
                    <th>Data utworzenia</th>
                    <th/>

                </tr>
                </thead>
                <tbody>
                {props.clients.filter((val) => {
                        if (props.searchUsers === "") {
                            return val;
                        } else if (val.email.toLowerCase().includes(props.searchUsers.toLowerCase())) {
                            return val;
                        }
                    }
                )
                    .map((item) => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.number_tel}</td>
                            <td>
                                {item.number_magnetic_cart}
                                <button className={classes.btnTable} onClick={() => {
                                    props.isHistoryShowTrigger()
                                    props.getIdToHistory(item._id)

                                }}>Przegląd
                                </button>
                                <button className={classes.btnTable}
                                        disabled={!item.isClientIn}
                                        style={{
                                            background: "green"
                                        }}
                                        onClick={() => {
                                            props.getIdToUpdateWhenIn(item._id)
                                            props.updateWhenInFlag(item._id)
                                        }}>W siłowni
                                </button>
                                <button className={classes.btnTable}
                                        disabled={item.isClientIn}
                                        onClick={(e) => {
                                            props.getIdToUpdateWhenOut(item._id)
                                            props.updateWhenOutFlag(item._id)
                                        }}>poza siłownią
                                </button>
                            </td>
                            <td>
                                <button className={classes.btnTable} onClick={() => {
                                    props.isKarnetShowTrigger()
                                    props.checkKarnet(item._id)
                                }}>Sprawdź
                                </button>
                            </td>
                            <td>{item.active ? "Tak" : "Nie"}</td>
                            <td>{item.createdAt}</td>
                            <td>
                                <button className={classes.btnTable} onClick={() => {
                                    props.setTempClient(() => item)
                                    props.onShowEdit()
                                }
                                }>Edytuj
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    )
}

export default ClientsTable;