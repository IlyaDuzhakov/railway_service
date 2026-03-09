import styles from "./SeatsSelect.module.css";
import { formatCity } from "../../../helpers/functions.js";
import TrainInfo from "../TrainInfo/TrainInfo.jsx";
import { travelTimeLong } from "../../../helpers/functions.js";
import CountTicket from "../CountTicket/CountTicket.jsx";
import TypeCarriage from "../TypeCarriage/TypeCarriage.jsx";
import Seats from "../Seats/Seats.jsx";
import {useState} from 'react'
import { Link } from "react-router-dom";


const SeatsSelect = ({ train }) => {
  const [selectCarriage, setSelectCarriage] = useState(null) 
  const chooseCarriage = (type) => {
      setSelectCarriage(type)
  }
  return (
    <main>
      <p className={styles.choose_text}>Выбор мест</p>

      <div className={styles.content_seats}>
        <div className={styles.choose_train_wrapper}>
          <img
            className={styles.choose_train_arrow}
            src="/img/icons/choose_train.svg"
            alt="choose_train arrow"
          />
          <button className={styles.choose_train_btn}>
            {/* <span className={styles.btn_text}>Выбрать другой поезд</span> */}
            <Link to='/select_train'>Выбрать другой поезд</Link>
          </button>
        </div>
        <div className={styles.cap}>
          <img src="/img/icons/train_icon.svg" alt="train" />
          <div className={styles.train_number}>
            <p className={styles.train_text}>116С</p>
            <p>
              <span>{formatCity(train?.departure.from.city.name)}</span>
              <img src="/img/icons/arrow_direction_black.svg" alt="" />
            </p>

            <p>{formatCity(train?.departure.to.city.name)}</p>
          </div>
          <TrainInfo train={train} show={false} />
          <div className={styles.train_time}>
            <img
              className={styles.clock_travel}
              src="/img/icons/clock_travel_time.svg"
              alt="clock"
            />
            <div className={styles.train_time_text}>
              {travelTimeLong(train?.departure.duration).map((el)=> {
                return <p>{el}</p>
              })}
              </div>
          </div>
        </div>
        <CountTicket />
        <div className={styles.card_line}></div>
        <TypeCarriage selectCarriage={selectCarriage} chooseCarriage={chooseCarriage} train={train}/>
        {selectCarriage !== null ? <Seats train={train} selectCarriage={selectCarriage}/> : ''}
      </div>
      <button className={styles.car}><Link to='/passengers'>Далее</Link></button>
    </main>
  );
};

export default SeatsSelect;
