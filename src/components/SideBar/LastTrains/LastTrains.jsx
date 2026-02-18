import { useEffect, useState } from "react";
import styles from "./LastTrains.module.css";

const LastTrains = () => {
  const [lastTickets, setLastTickets] = useState([]);

  const getTrains = async () => {
    const response = await fetch(
      "https://students.netoservices.ru/fe-diplom/routes/last",
    );
    const data = await response.json();
    setLastTickets(data);
  };

  useEffect(() => {
    getTrains();
  }, []);

  return (
    <div className={styles.last_ticket_wrapper}>
      <h2 className={styles.last_ticket_text}>последние билеты</h2>
      {lastTickets.map((el, index) => {
        return (
          <div className={styles.last_ticket} key={index}>
            <div className={styles.top}>
              <div className={styles.top_right}>
                <p className={styles.city}>{el.departure.from.city.name}</p>
                <p className={styles.railway_left}>
                  {el.departure.from.railway_station_name}
                  <br />
                  вокзал
                </p>
              </div>
              <div className={styles.top_left}>
                <p className={styles.city}>{el.departure.to.city.name}</p>
                <p className={styles.railway_right}>
                  {el.departure.to.railway_station_name}
                  <br />
                  вокзал
                </p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottom_right}>
                <img src="/img/icons/last_train_icons.svg" alt="wi-fi" />
              </div>
              <div className={styles.bottom_left}>
                <p className={styles.price_text}>
                  oт <span className={styles.price}>{el.min_price} </span>{" "}
                  <img
                    className={styles.coin}
                    src="/img/icons/coin.svg"
                    alt="coin"
                  />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LastTrains;
