import styles from "../PassengersList/PassengersList.module.css";
import { useState } from "react";
import PassengerInfo from "./PassengerInfo";

const PassengerItem = ({number}) => {
  const [open, setOpen] = useState(false);
  const passenger = "/img/icons/passenger/";
  
  return (
    <>
      <div className={styles.passenger_top}>
        <div className={styles.passenger}>
          <button className={styles.btn_minus} onClick={()=> {
            setOpen((prev)=>!prev)
          }}>
            <img
              className={styles.minus}
              src={open === true ? passenger + "minus.svg" : passenger + "plus_active.svg"}
              alt="minus"
            />
          </button>
          <span className={styles.passengers_text}>Пассажир {number}</span>
        </div>
        {open === true ?  <button className={styles.btn_delete} onClick={()=> {
            setOpen(false)
        }}>
          <img
            className={styles.delete}
            src={passenger + "delete.svg"}
            alt="delete"
          />
        </button> : ""}
       
      </div>
      {open ? <PassengerInfo passenger={passenger}/> : ""}
      
    </>
  );
};

export default PassengerItem;
