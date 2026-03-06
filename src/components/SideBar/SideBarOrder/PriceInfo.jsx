import { CountTicketContext } from "../../../helpers/context";
import { useContext, useState } from "react";
import styles from "./SideBarOrder.module.css";
import { SelectTrainContext } from "../../../helpers/context";

const PriceInfo = () => {
  const [train, setTrain] = useContext(SelectTrainContext);

  const titles = {
    adult: "Взрослые",
    children: "Дети",
    child_no_seat: "Дети без места",
  };
  const [tickets, setTickets] = useContext(CountTicketContext);

  const entries = Object.entries(tickets).filter((el) => {
    if (+el[1].count > 0) {
      return el;
    }
  });

  return (
    <>
      <div className={styles.price_wrapper}>
        {entries.map((el) => {
          const priceTicket = Math.floor(train.departure.min_price * el[1].koef * el[1].count);
    
          return (
            <div className={styles.price}>
              <p className={styles.price_text}>
                {el[1].count} {titles[el[0]]}
              </p>
              <p className={styles.price_ticket}>
                {priceTicket}
                <img className={styles.coin} src="/img/icons/coin.svg" alt="coin" />
              </p>
            </div>
          );
        })}
      </div>
      <div className="sidebarDivider"></div>
      <div className={styles.sum_price}>
        <p className={styles.sum}>Итог{entries.reduce((acc, value)=> {
            // console.log(value)
            return acc + Math.floor(value[1].count * value[1].koef * train.departure.min_price)
        }, 0)}</p>
      </div>
    </>
  );
};

export default PriceInfo;
