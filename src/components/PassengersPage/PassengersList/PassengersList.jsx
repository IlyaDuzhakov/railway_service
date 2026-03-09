import styles from "./PassengersList.module.css";
import { useContext, useState } from "react";
import PassengerItem from "../PassengerItem/PassengerItem";
import { PassengersContext } from "../../../helpers/context.js";
import { countTickets, createUsers } from "../../../helpers/functions";
import { Link } from "react-router-dom";

const PassengersList = () => {
  const [users, setUsers] = useContext(PassengersContext);

  const updateUser = (id, fields) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...fields } : user)),
    );
  };

  return (
    <main className={styles.passengers_container}>
      <div className={styles.one_passenger_wrapper}>
        {users.map((el, index) => {
          return (
            <PassengerItem
              key={index}
              number={index + 1}
              user={el}
              onUpdate={updateUser}
            />
          );
        })}
      </div>
      <button className={styles.to_next_page}>
        <Link to="/payment">Далее</Link>
      </button>
    </main>
  );
};

export default PassengersList;
