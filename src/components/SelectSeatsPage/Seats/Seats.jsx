import styles from "./Seats.module.css";
import {randomSeats} from '../../../helpers/functions.js'

const Seats = ({selectCarriage, train}) => {
  const path = "/img/icons/service/";
  const [top, bottom] = randomSeats(train?.available_seats_info[selectCarriage])
  
  return (
    <div>
      <div className={styles.top}>
        <p>
          <span>Вагоны</span>
          <span>07</span>
          <span>09</span>
        </p>
        <p>Нумерация вагонов начинается с головы поезда</p>
      </div>
      <div className={styles.middle}>
        <div>
          <p>07</p>
          <p>вагон</p>
        </div>
        <div className={styles.seats_info}>
          <div className={styles.left}>
            <p>Места {train?.available_seats_info[selectCarriage]}</p>
            <p>Верхние {top}</p>
            <p>Нижние {bottom}</p>
          </div>
          <div className={styles.right}>
            <p>Стоимость</p>
            <p>2 920</p>
            <p></p>
          </div>
        </div>

        <div className={styles.seats_end}>
          <p>
            {" "}
            Обслуживание
            <span>ФПК</span>
          </p>
          <div>
            <img src={`${path}air_conditioner.svg`} alt="air_conditioner" />
            <img src={path + "air_conditioner.svg"} alt="air_conditioner" />
            <img src={`${path}air_conditioner.svg`} alt="air_conditioner" />
            <img src={`${path}air_conditioner.svg`} alt="air_conditioner" />
          </div>
          <p>11 человек выбирают места в этом поезде</p>
        </div>
      </div>
      <div className={styles.bottom}>
            <img src="/img/icons/seats.png" alt="seats" />
      </div>
    </div>
  );
};

export default Seats;
