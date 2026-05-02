import styles from "./Seats.module.css";
import {randomSeats} from '../../../helpers/functions.js'
import { useEffect, useState } from "react";
import {getTicketPrice} from '../../../helpers/functions.js'
import Books from '../../icons/Books.jsx'
import WiFi from '../../icons/WiFi.jsx'
import Air from '../../icons/Air.jsx'
import Cup from '../../icons/Cup.jsx'


const Seats = ({selectCarriage, train}) => {
  const [ticketPrice, setTicketPrice] = useState({top_price: 0, bottom_price: 0})
  const path = process.env.PUBLIC_URL + "/img/icons/service";
  const [top, bottom] = randomSeats(train?.available_seats_info[selectCarriage])

  const getTrainInfo = async () => {
    try{

      const response = await fetch('https://students.netoservices.ru/fe-diplom/routes/67ceb67d8c75f00047c91fcd/seats')
      const rezult = await response.json()
      setTicketPrice (await getTicketPrice(rezult, selectCarriage))
    }
    catch(error) {
      console.log(error)
    } 
  } 
  
  useEffect(()=> {
      getTrainInfo()

  },[selectCarriage])
  
  return (
    <div>
      <div className={styles.top}>
        <p>
          <span className={styles.top_train}>Вагоны</span>
          <span className={styles.top_train_number}>07</span>
          <span className={styles.top_train_second_number}>09</span>
        </p>
        <p>Нумерация вагонов начинается с головы поезда</p>
      </div>
      <div className={styles.middle}>
        <div className={styles.block_train}>
            <div className={styles.train_wrapper}>
          <p className={styles.train_number}>07</p>
          <p className={styles.train_name}>вагон</p>
          </div>
        </div>
        <div className={styles.seats_info}>
          <div className={styles.left}>
            <p>Места {train?.available_seats_info[selectCarriage]}</p>
            <p>Верхние {top}</p>
            <p>Нижние {bottom}</p>
          </div>
          <div className={styles.right}>
            <p>Стоимость</p>
            <p>{ticketPrice.top_price}</p>
            <p>{ticketPrice.bottom_price}</p>
          </div>
        </div>

        <div className={styles.seats_end}>
          <p>
           
            Обслуживание
            <span> ФПК</span>
          </p>
          <div className={styles.seats_service}>
            <Air />
            <WiFi />
            <Books />
            <Cup />
          </div>
          <p className={styles.choose_seats}>11 человек выбирают места в этом поезде</p>
        </div>
      </div>
      <div className={styles.bottom}>
            <img className={styles.img_seats} src={process.env.PUBLIC_URL + "/img/icons/seats.png"} alt="seats" />
      </div>
    </div>
  );
};

export default Seats;
