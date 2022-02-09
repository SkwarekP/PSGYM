import {Card} from "react-bootstrap";

function othersClientsTable(props) {

    return (
        <Card className="cardIntro">
            <div>
                <header className="text-center">Pozostali klienci</header>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Adres</th>
                    <th>Adres e-mail</th>
                    <th>Numer telefonu</th>
                    <th>Data utworzenia</th>
                </tr>
                </thead>
                <tbody>
                {props.users.map((item) => (
                    <tr key={Math.random()}>
                        <td>{item.name}</td>
                        <td>{item.lastName}</td>
                        <td>{item.adres}</td>
                        <td>{item.email}</td>
                        <td>{item.nr_tel}</td>
                        <td>{item.data_utworzenia}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </Card>
    )

}

export default othersClientsTable;