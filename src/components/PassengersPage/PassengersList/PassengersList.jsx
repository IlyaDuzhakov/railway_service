import styles from "./PassengersList.module.css";
import { useContext, useState } from "react";
import PassengerItem from "../PassengerItem/PassengerItem";
import { CountTicketContext } from "../../../helpers/context.js";
import { countTickets } from "../../../helpers/functions";
import { Link } from "react-router-dom";

const PassengersList = () => {
  const [tickets, setTickets] = useContext(CountTicketContext);
  const count = countTickets(tickets);

  const countArr = new Array(count).fill('');
  console.log(countArr);
  return (
    <main className={styles.passengers_container}>
      <div className={styles.one_passenger_wrapper}>
        {countArr.map((el, index) => {
          return <PassengerItem key={index} number={index + 1}/>;
        })}
      </div>
        <button className={styles.to_next_page}><Link to='/payment'>Далее</Link></button>
    </main>
  );
};

export default PassengersList;
