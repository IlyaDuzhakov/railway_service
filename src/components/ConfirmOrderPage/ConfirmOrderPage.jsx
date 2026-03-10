import styles from './ConfirmOrderPage.module.css'
import { Link } from "react-router-dom";
import TrainItem from "../SelectTrainPage/TrainsList/TrainItem";
import { SelectTrainContext, PassengersContext, CountTicketContext } from "../../helpers/context";
import { useContext } from "react";
import ConfirmPayment from './ConfirmPayment';
const ConfirmOrderPage = () => {
  const [train, setTrain] = useContext(SelectTrainContext);
  const [users, setUsers] = useContext(PassengersContext);
    
  const [tickets, setTickets] = useContext(CountTicketContext);

  const entries = Object.entries(tickets).filter((el) => {
    if (+el[1].count > 0) {
      return el;
    }
  });

  

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
            return <div className={styles.user_avatar_wrapper}>
                <div className={styles.user_avatar}>
                    <img src="/img/icons/passenger.svg" alt="avatar" />
                    {user.type==="adult" ? <p>Взрослый</p> : <p>Детский</p>}
                </div>
                <div className={styles.user_info}>
                    <p>{user.secondName} {user.name} {user.surname}</p>
                    <p className={styles.gender_text}>Пол: {user.gender ==="M" ? "мужской" : "женский"}</p>
                    <p className={styles.gender_text}>Дата рождения: {user.date.split('-').reverse().join('.')}</p>
                    <p className={styles.gender_text}>{user.document_type === 'passport' ? `Паспорт РФ ${user.document_series} ${user.document_number}` : `Свидетельство о рождении ${user.document_number}`} </p>
                </div>
            </div>;
          })}
        </div>
        
        <div className={styles.total_sum}>
          Всего: {entries.reduce((acc, value )=> {
            return acc + Math.floor(value[1].count * value[1].koef * train.departure.min_price)
          }, 0)}
          <button className={styles.btn_change}>
            <Link to="/passengers">Изменить</Link>
          </button>
        </div>
        </div>
      </div>

      <ConfirmPayment />

      <button>
        <Link to="/successful_order">Подтвердить</Link>
      </button>
    </div>
  );
};

export default ConfirmOrderPage;
