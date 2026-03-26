import styles from "../SeatsSelect/SeatsSelect.module.css";
import { useContext, useState } from "react";
import { CountTicketContext } from "../../../helpers/context.js";

const PassengersCard = ({ el }) => {
  const [tickets, setTickets] = useContext(CountTicketContext);

  return (
    <div className={styles.passengers_card}>
      <label htmlFor={el.id} className={styles.passengers_label}>{el.title}</label>
      <input
        id={el.id}
        className={styles.passengers_input}
        type="number"
         min="0"
        value={tickets[el.id].count}
        onChange={(event) => {
          const key = el.id;
          setTickets({
            ...tickets,
            [key]: { ...tickets[key], count: event.target.value },
          });
        }}
      />

      <p className={styles.passengers_text}>{el.text} </p>
    </div>
  );
};

export default PassengersCard;
