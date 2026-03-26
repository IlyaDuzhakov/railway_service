import { CountTicketContext } from "../../../helpers/context";
import { useContext } from "react";
import styles from "./SideBarOrder.module.css";
import { SelectTrainContext } from "../../../helpers/context";
import { formatPrice } from "../../../helpers/formatPrice";

const PriceInfo = () => {
  const [train] = useContext(SelectTrainContext);

  const titles = {
    adult: "Взрослые",
    children: "Дети",
    child_no_seat: "Дети без места",
  };
  const [tickets] = useContext(CountTicketContext);

  const entries = Object.entries(tickets).filter((el) => {
    return +el[1].count > 0;
  });

  const totalPrice = entries.reduce((acc, value) => {
    return (
      acc +
      Math.floor(value[1].count * value[1].koef * train.departure.min_price)
    );
  }, 0);

  return (
    <>
      <div className={styles.price_wrapper}>
        {entries.map((el) => {
          const priceTicket = Math.floor(
            train.departure.min_price * el[1].koef * el[1].count,
          );

          return (
            <div className={styles.price}>
              <p className={styles.price_text}>
                {el[1].count} {titles[el[0]]}
              </p>
              <p className={styles.price_ticket}>
                {formatPrice(priceTicket)}
                <img
                  className={styles.coin}
                  src={process.env.PUBLIC_URL + "/img/icons/coin.svg"}
                  alt="coin"
                />
              </p>
            </div>
          );
        })}
      </div>
      <div className="sidebarDivider"></div>
      <div className={styles.sum_price}>
        <p className={styles.sum}>ИТОГ </p>
        <div className={styles.sum_wrapper}>
          <div className={styles.sum}>
            <span className={styles.sum_rezult}>{formatPrice(totalPrice)}</span>
          </div>
          <img
            className={styles.coin_img}
            src={process.env.PUBLIC_URL + "/img/icons/coin_white.svg"}
            alt="coin_white"
          />
        </div>
      </div>
    </>
  );
};

export default PriceInfo;
