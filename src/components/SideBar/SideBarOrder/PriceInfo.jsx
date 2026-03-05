import { CountTicketContext } from "../../../helpers/context";
import { useContext, useState } from "react";
import styles from "./SideBarOrder.module.css";
import { SelectTrainContext } from "../../../helpers/context";

const PriceInfo = () => {
  const [train, setTrain] = useContext(SelectTrainContext);
  const [prices, setPrices] = useState([]);
  const price = prices.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const titles = {
    adult: "Взрослые",
    children: "Дети",
    child_no_seat: "Дети без места",
  };
  const [tickets, setTickets] = useContext(CountTicketContext);

  const entries = Object.entries(tickets).filter((el) => {
    if (+el[1] > 0) {
      return el;
    }
  });
  const btn = () => {
    console.log('start')
    entries.forEach((el) => {
      const priceTicket =
        el[0] === "adult"
          ? train.departure.min_price * el[1]
          : el[0] === "child_no_seat"
            ? 0
            : Math.floor(train.departure.min_price * 0.5 * el[1]);
      setPrices([...prices, priceTicket]);

    }); 
    console.log('end')
  };

  return (
    <>
      <div className={styles.price_wrapper}>
        {entries.map((el) => {
          const priceTicket =
            el[0] === "adult"
              ? train.departure.min_price * el[1]
              : el[0] === "child_no_seat"
                ? 0
                : Math.floor(train.departure.min_price * 0.5 * el[1]);
          // setTickets({...tickets, el[0].price: priceTicket})
          // setPrices([...prices])

          return (
            <div className={styles.price}>
              <p className={styles.price_text}>
                {el[1]} {titles[el[0]]}
              </p>
              <p className={styles.price_ticket}>
                {priceTicket}
                <img src="/img/icons/coin.svg" alt="coin" />
              </p>
            </div>
          );
        })}
      </div>
      <div className="sidebarDivider"></div>
      <div>
        <p>Итого: {price}</p>
        <button
          onClick={() => {
            btn();
            
          }}
        >
          Жми
        </button>
      </div>
    </>
  );
};

export default PriceInfo;
