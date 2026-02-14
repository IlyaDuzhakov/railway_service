import styles from "./ChooseDirection.module.css";
import updateIcon from "../../../assets/icons/update.svg";
import { useContext } from "react";
import { TicketContext } from "../../../helpers/context";
const InputsDirection = ({listCitiesFrom, listCitiesTo}) => {

  const [newTicket, setNewTicket] = useContext(TicketContext)
  return (
    <div className={styles.direction}>
      <div className={styles.form_title}>Направление</div>

      <div className={styles.choose_direction}>
        <div className={styles.input_container}>
          <input
            value={newTicket.from}
            className={styles.input}
            type="text"
            placeholder="Откуда"
            onChange={(event) => {
              setNewTicket({...newTicket, from:event.target.value});
            }}
          />
          <div className={styles.cities_box}>
            {newTicket.from !== "" ? listCitiesFrom.map((el, index) => {
              return (
                <p
                  className={styles.city}
                  key={index}
                  onClick={() => {
                    setNewTicket({...newTicket, from: el.name});
                  }}
                >
                  {el.name}
                </p>
              );
            }) : "" }
          </div>
        </div>
        <img className={styles.update_icon} src={updateIcon} alt="swap" />
        <div className={styles.input_container}>
          <input
            value={newTicket.to}
            className={styles.input}
            type="text"
            placeholder="Куда"
            onChange={(event) => {
              setNewTicket({...newTicket, to:event.target.value})
            }}
          />
          <div className={styles.cities_box}>
            { newTicket.to !== "" ? listCitiesTo.map((el, index) => {
              return (
                <p
                  className={styles.city}
                  key={index}
                  onClick={() => {           
                    setNewTicket({...newTicket, to:el.name});
                  }}
                >
                  {el.name}
                </p>
              );
            }) : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputsDirection;
