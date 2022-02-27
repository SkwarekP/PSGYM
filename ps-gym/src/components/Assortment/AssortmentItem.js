import {Card, Col} from "react-bootstrap";
import classes from "./AssortmentItem.module.css";
import ChangeStanItem from "./ChangeStanItem";
import {useState} from "react";

function AssortmentItem(props) {

    const changeStanHandler = (stan) => {
        props.onReceive(stan)
    }

    const [isModalShown, setIsModalShown] = useState(false)

    const closeModalShown = () => {
        setIsModalShown(() => false)
    }
    const showModal = () => {
        setIsModalShown(() => true)
    }


    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className={classes.cardBody}>
                <img src={props.photo} className={classes.cardImgTop} alt=""/>
                <div className={classes.cardBd}>
                    <h5 className={classes.cardTitle}>{props.title}</h5>
                    <p className={classes.cardText2}>
                        Stan: {props.stan} sztuk
                    </p>
                    <button className={classes.buttonSell} onClick={showModal} style={{fontSize: "18px"}}>Aktualizuj
                    </button>
                </div>
            </Card>
            {isModalShown && <ChangeStanItem onClose={closeModalShown} isModalShown={isModalShown} stan={props.stan}
                                             title={props.title} id={props.id} onReceiveStan={changeStanHandler}/>}
        </Col>
    )
}

export default AssortmentItem;