import styles from "../SeatsSelect/SeatsSelect.module.css";
import { useContext, useState } from "react";
import { CountTicketContext } from "../../../helpers/context.js";

const PassengersCard = ({ el }) => {
  const [tickets, setTickets] = useContext(CountTicketContext);

    const handleChange = (event) => {
    const key = el.id;
    const value = event.target.value;

    if (!/^\d*$/.test(value)) {
      return;
    }

    setTickets({
      ...tickets,
      [key]: {
        ...tickets[key],
        count: value,
      },
    });
  };

  return (
    <div className={styles.passengers_card}>
      <label htmlFor={el.id} className={styles.passengers_label}>{el.title}</label>
      <input
        id={el.id}
        className={styles.passengers_input}
          type="text"
        inputMode="numeric"
        value={tickets[el.id].count}
        onChange={handleChange}
      />

      <p className={styles.passengers_text}>{el.text} </p>
    </div>
  );
};

export default PassengersCard;
