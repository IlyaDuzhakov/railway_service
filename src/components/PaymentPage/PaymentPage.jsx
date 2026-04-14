import { useContext, useState } from "react";
import PaymentInfo from "./PaymentInfo.jsx";
import styles from "./PaymentPage.module.css";
import { Link } from "react-router-dom";
import { OrderContext } from "../../helpers/context.js";
import CustomButton from "../ui/CustomButton/CustomButton.jsx";
import { phoneNumber } from "../../helpers/functions.js";

const PaymentPage = () => {
  const [order, setOrder] = useContext(OrderContext);
  const [online, setOnline] = useState(
    order.payment_method === "online" ? true : false,
  );
  const [cash, setCash] = useState(
    order.payment_method === "cash" ? true : false,
  );

  const [surnameError, setSurnameError] = useState(false);
  const surnameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  const [nameError, setnameError] = useState(false);
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
  const [secondnameError, setSecondnameError] = useState(false);
  const secondnameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

  const checkPhoneNumber = /^\+7 \(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  const digitsCount = order.phone.replace(/\D/g, "").length;

  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className={styles.payment_wrapper}>
      <div className={styles.payment_main}>
        <PaymentInfo text="Персональные данные" />
        <div className={styles.payment_initials_wrapper}>
          <div className={styles.payment_initials}>
            <p className={styles.payment_initials_text}>Фамилия</p>
            <input
              className={`${styles.payment_initials_input} ${
                surnameError ? styles.inputError : ""
              }`}
              type="text"
              placeholder="Мартынюк"
              value={order.surname}
              onChange={(event) => {
                const value = event.target.value;
                setOrder({ ...order, surname: event.target.value });
                if (value === "") {
                  setSurnameError(false);
                } else {
                  setSurnameError(!surnameRegex.test(value));
                }
              }}
            />
            {surnameError && (
              <p style={{ color: "red" }}>Допустимы только буквы (рус/анг)</p>
            )}
          </div>
          <div className={styles.payment_initials}>
            <p className={styles.payment_initials_text}>Имя</p>
            <input
              className={`${styles.payment_initials_input} ${
                nameError ? styles.inputError : ""
              }`}
              type="text"
              placeholder="Ирина"
              value={order.name}
              onChange={(event) => {
                const value = event.target.value;
                setOrder({ ...order, name: event.target.value });
                 if (value === "") {
                  setnameError(false);
                } else {
                  setnameError(!nameRegex.test(value));
                }
              }}
              />
              {nameError && (
              <p style={{ color: "red" }}>Допустимы только буквы (рус/анг)</p>
            )}
          </div>
          <div className={styles.payment_initials}>
            <p className={styles.payment_initials_text}>Отчество</p>
            <input
              className={`${styles.payment_initials_input} ${
                secondnameError ? styles.inputError : ""
              }`}
              type="text"
              placeholder="Эдуардовна"
              value={order.secondName}
              onChange={(event) => {
                const value = event.target.value;
                setOrder({ ...order, secondName: event.target.value });
                if (value === "") {
                  setSecondnameError(false);
                } else {
                  setSecondnameError(!secondnameRegex.test(value));
                }
              }}
            />
            {secondnameError && (
              <p style={{ color: "red" }}>Допустимы только буквы (рус/анг)</p>
            )}
          </div>
        </div>
        <div className={styles.contact_details_wrapper}>
          <div className={styles.contact_details}>
            <label className={styles.label}>Контактный телефон</label>
            <input
              className={styles.phone}
              type="tel"
              placeholder="+7 __ __ _ _ "
              value={order.phone}
              onChange={(event) => {
                setOrder({
                  ...order,
                  phone: phoneNumber(event.target.value),
                });
              }}
            />
            {digitsCount > 4 &&
              (checkPhoneNumber.test(order.phone) ? (
                <p className={styles.right_number}>Корректный номер</p>
              ) : (
                <p className={styles.wrong_number}>
                  Номер должен быть в формате +7 (999) 898-99-08
                </p>
              ))}
          </div>
          <div className={styles.contact_details}>
            <label className={styles.label_email}>E-mail</label>
            <input
              className={styles.email}
              type="email"
              placeholder="inbox@gmail.ru"
              value={order.email}
              onChange={(event) => {
                setOrder({ ...order, email: event.target.value });
              }}
            />
            {order.email.length > 3 &&
              (checkEmail.test(order.email) ? (
                <p className={styles.right_number}>Корректный email</p>
              ) : (
                <p className={styles.wrong_number}>Введите корректный email</p>
              ))}
          </div>
        </div>
        <PaymentInfo text="Способ оплаты" />
        <div className={styles.online_payments}>
          <div className={styles.online_top}>
            <label className={styles.payment_label}>
              <input
                type="checkbox"
                className={styles.payment_input}
                checked={online}
                onChange={(event) => {
                  setOnline(event.target.checked);
                  if (event.target.checked === true) {
                    setCash(false);
                    setOrder({ ...order, payment_method: "online" });
                  }
                }}
              />
              <span className={styles.payment_box}></span>
              <span className={styles.payment_text}>Онлайн</span>
            </label>
          </div>

          <div className={styles.online_bottom}>
            <p>
              Банковской <br /> картой
            </p>
            <p>PayPal</p>
            <p>Visa QIWI Wallet</p>
          </div>

          <div className={styles.cash_block}>
            <label className={styles.payment_label}>
              <input
                type="checkbox"
                className={styles.payment_input}
                checked={cash}
                onChange={(event) => {
                  setCash(event.target.checked);
                  if (event.target.checked === true) {
                    setOnline(false);
                    setOrder({ ...order, payment_method: "cash" });
                  }
                }}
              />
              <span className={styles.payment_box}></span>
              <span className={styles.payment_text}>Наличными</span>
            </label>
          </div>
        </div>
      </div>
      <CustomButton variant="outline" className="btn_payment">
        <Link to="/confirm_order">КУПИТЬ БИЛЕТЫ</Link>
      </CustomButton>
    </div>
  );
};

export default PaymentPage;
