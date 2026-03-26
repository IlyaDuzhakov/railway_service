import styles from "./ConfirmOrderPage.module.css";
import { useNavigate } from "react-router-dom";
import TrainItem from "../SelectTrainPage/TrainsList/TrainItem";
import { formatPrice } from "../../helpers/formatPrice";
import {
  SelectTrainContext,
  PassengersContext,
  CountTicketContext,
} from "../../helpers/context";
import { useContext } from "react";
import ConfirmPayment from "./ConfirmPayment";
import CustomButton from "../ui/CustomButton/CustomButton";
const ConfirmOrderPage = () => {
  const navigate = useNavigate();
  const [train] = useContext(SelectTrainContext);
  const [users] = useContext(PassengersContext);

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
    <div>
      <div className={styles.confirm_train}>
        <h2 className={styles.confirm_text_train}>Поезд</h2>
        <TrainItem el={train} type_btn="edit" />
      </div>

      <div className={styles.confirm_passengers}>
        <h2 className={styles.confirm_text}>Пассажиры</h2>
        <div className={styles.passengers_wrapper}>
          <div className={styles.passengers}>
            {users.map((user) => {
              return (
                <div className={styles.user_avatar_wrapper}>
                  <div className={styles.user_avatar}>
                    <img
                      src={process.env.PUBLIC_URL + "/img/icons/passenger.svg"}
                      alt="avatar"
                    />
                    {user.type === "adult" ? <p>Взрослый</p> : <p>Детский</p>}
                  </div>
                  <div className={styles.user_info}>
                    <p>
                      {user.secondName} {user.name} {user.surname}
                    </p>
                    <p className={styles.gender_text}>
                      Пол: {user.gender === "M" ? "мужской" : "женский"}
                    </p>
                    <p className={styles.gender_text}>
                      Дата рождения: {user.date.split("-").reverse().join(".")}
                    </p>
                    <p className={styles.gender_text}>
                      {user.document_type === "passport"
                        ? `Паспорт РФ ${user.document_series} ${user.document_number}`
                        : `Свидетельство о рождении ${user.document_number}`}{" "}
                    </p>

                    {user.checkbox && (
                      <p className={styles.mobility_text}>
                        Ограниченная подвижность
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.total_sum}>
            <div className={styles.total_sum_wrapper}>
              <span className={styles.all_price}>Всего</span>
              <span className={styles.total_price}>
                {formatPrice(totalPrice)}
              </span>
              <img
                className={styles.img_coin}
                src={process.env.PUBLIC_URL + "/img/icons/coin.svg"}
                alt="coin"
              />
            </div>
            <CustomButton
              variant="dark"
              className={styles.btn_change}
              onClick={() => navigate("/passengers")}
            >
              Изменить
            </CustomButton>
          </div>
        </div>
      </div>

      <ConfirmPayment />
      <div className={styles.btn_confirm_wrapper}>
        <CustomButton
          variant="secondary"
          className={styles.btn_confirm}
          onClick={() => navigate("/successful_order")}
        >
          ПОДТВЕРДИТЬ
        </CustomButton>
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
