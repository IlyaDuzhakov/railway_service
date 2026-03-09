import { useContext, useState } from "react";
import PaymentInfo from "./PaymentInfo.jsx";
import styles from "./PaymentPage.module.css";
import { Link } from "react-router-dom";
import { OrderContext } from "../../helpers/context.js";

const PaymentPage = () => {
  const [order, setOrder] = useContext(OrderContext);
  const [online, setOnline] = useState(false);
  const [cash, setCash] = useState(false);

  return (
    <div className={styles.payment_wrapper}>
      <div className={styles.payment_main}>
        <PaymentInfo text="Персональные данные" />
        <div className={styles.payment_initials_wrapper}>
          <div className={styles.payment_initials}>
            <p className={styles.payment_initials_text}>Фамилия</p>
            <input
              className={styles.payment_initials_input}
              type="text"
              placeholder="Мартынюк"
              value={order.surname}
              onChange={(event) => {
                setOrder({ ...order, surname: event.target.value });
              }}
            />
          </div>
          <div className={styles.payment_initials}>
            <p className={styles.payment_initials_text}>Имя</p>
            <input
              className={styles.payment_initials_input}
              type="text"
              placeholder="Ирина"
              value={order.name}
              onChange={(event) => {
                setOrder({ ...order, name: event.target.value });
              }}
            />
          </div>
          <div className={styles.payment_initials}>
            <p className={styles.payment_initials_text}>Отчество</p>
            <input
              className={styles.payment_initials_input}
              type="text"
              placeholder="Эдуардовна"
              value={order.secondName}
              onChange={(event) => {
                setOrder({ ...order, secondName: event.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Контактный телефон</label>
            <input
              type="tel"
              placeholder="+7 __ __ _ _ "
              value={order.phone}
              onChange={(event) => {
                setOrder({ ...order, phone: event.target.value });
              }}
            />
          </div>
          <div>
            <label>E-mail</label>
            <input
              type="email"
              placeholder="inbox@gmail.ru"
              value={order.email}
              onChange={(event) => {
                setOrder({ ...order, email: event.target.value });
              }}
            />
          </div>
        </div>
        <PaymentInfo text="Способ оплаты" />
        <div className={styles.online_payments}>
          <div className={styles.online_top}>
            <input
              type="checkbox"
              id="online"
              checked={online}
              onChange={(event) => {
                setOnline(event.target.checked);
                if (event.target.checked === true) {
                  setCash(false);
                  setOrder({...order, payment_method: 'online'})
                }
              }}
            />
            <label htmlFor="online">Онлайн</label>
          </div>
          <div className={styles.online_bottom}>
            <p>Банковской картой</p>
            <p>PayPal</p>
            <p>Visa QIWI Wallet</p>
          </div>
          <div>
            <input
              type="checkbox"
              id="cash"
              checked={cash}
              onChange={(event) => {
                setCash(event.target.checked);
                if (event.target.checked === true) {
                  setOnline(false);
                  setOrder({...order, payment_method: 'cash'})
                }
              }}
            />
            <label htmlFor="cash">Наличными</label>
          </div>
        </div>
      </div>
      <button>
        <Link to="/confirm_order">Купить билеты</Link>
      </button>
    </div>
  );
};

export default PaymentPage;
