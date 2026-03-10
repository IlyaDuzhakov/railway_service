import DirectionInfo from "./DirectionInfo";
import { SelectTrainContext } from "../../../../helpers/context";
import styles from "./SideBarDirection.module.css";
import {useContext, useState} from 'react'
import { getTrainsDate } from "../../../../helpers/functions";

const SideBarDirection = ({ direction }) => {
  const [train, setTrain] = useContext(SelectTrainContext)
  const [show, setShow] = useState(false)
  return (
    <div className={styles.direction_wrapper}>
      <div className={styles.top}>
        <img className={styles.direction_img} style={{transform: direction === 'Обратно' ? 'rotate(180deg)' : 'rotate(0)'}} src='/img/icons/arrow.svg' alt="" />
        <p className={styles.direction_text}>{direction}</p>
        <p className={styles.direction_date}>
           {getTrainsDate(train?.departure.from.datetime)}
        </p>
        <button className={styles.btn_open_close} onClick={()=> {
          setShow((prev)=> !prev)
        }}>
          <img src={show ? '/img/icons/minus.svg' : '/img/icons/plus.svg'} alt="" />
        </button>
      </div>
      {show ? <DirectionInfo /> : ''}
      
    </div>
  );
};

export default SideBarDirection;
