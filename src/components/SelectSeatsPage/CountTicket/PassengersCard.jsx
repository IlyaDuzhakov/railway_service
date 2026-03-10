import styles from "../SeatsSelect/SeatsSelect.module.css";
import { useContext, useState } from "react";
import { CountTicketContext } from "../../../helpers/context.js";

const PassengersCard = ({ el }) => {
  const [tickets, setTickets] = useContext(CountTicketContext);

  return (
    <div className={styles.passengers_card}>
      <label htmlFor="">{el.title}</label>
      <input
        className={styles.passengers_input}
        type="number"
        value={tickets[el.id].count}
        onChange={(event) => {
          const key = el.id;
          setTickets({
            ...tickets,
            [key]: { ...tickets[key], count: event.target.value },
          });
        }}
      />

      <p>{el.text} </p>
    </div>
  );
};

export default PassengersCard;
