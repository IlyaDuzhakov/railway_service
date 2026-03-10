import styles from "./SuccessfulOrderPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SuccessfulOrderPage = () => {
  const arrStar = [1, 2, 3, 4, 5];
  const [raiting, setRaiting] = useState(0);
  return (
    <div className={styles.order_wrapper}>
      <h1 className={styles.big_text}>Благодарим Вас за заказ!</h1>
      <div className={styles.order_container}>
        <div className={styles.order_number_wrapper}>
          <p className={styles.number}>№Заказа 285АА</p>
          <div className={styles.sum_wrapper}>
          <p className={styles.sum}>cумма</p>
          <img src="/img/icons/coin.svg" alt="coin" />
          </div>
        </div>
        <div className={styles.order_info_wrapper}>
          <div className={styles.ord}>
            <img src="/img/icons/computer.svg" alt="" />
            <p className={styles.order_text}>
              билеты будут отправлены на ваш
              <span className={styles.bold}> e-mail</span>
            </p>
          </div>
          <div className={styles.ord}>
            <img src="/img/icons/conductor.svg" alt="" />
            <p className={styles.order_text}>
              <span className={styles.bold}>распечатайте</span><br />
              и сохраняйте билеты до даты поездки
            </p>
          </div>
          <div className={styles.ord}>
            <img src="/img/icons/ticket_printing.svg" alt="" />
            <p className={styles.order_text}>
              <span className={styles.bold}>предьявите</span><br />
              распечатанные билеты при посадке
            </p>
          </div>
        </div>
        <div className={styles.successfull_wrapper}>
          <p className={styles.customer_text}>Ирина Эдуардовна!</p>
          <p className={styles.successfull_order}>
            Ваш заказ успешно оформлен. <br />
            В ближайшее время с вами свяжется наш
            оператор для подтверждения.
          </p>
          <p className={styles.successfull_order_bold}>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
        </div>
        <div className={styles.grade_wrapper}>
          <div className={styles.grade}>
            <p className={styles.grade_text}>Оценить сервис</p>
            {arrStar.map((el) => {
              return (
                <img
                  src={
                    raiting >= el
                      ? "/img/icons/active_star.svg"
                      : "/img/icons/star.svg"
                  }
                  onClick={() => {
                    setRaiting(el);
                  }}
                ></img>
              );
            })}
          </div>
          <button className={styles.btn_return}><Link to='/'>ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link></button>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulOrderPage;
