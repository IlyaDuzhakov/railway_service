import DirectionInfo from "./DirectionInfo";
import { SelectTrainContext, TicketContext } from "../../../../helpers/context.js";
import styles from "./SideBarDirection.module.css";
import {getTrainsDate} from '../../../../helpers/functions.js'
import {useContext, useState} from 'react'



const SideBarDirection = ({ direction }) => {
  const [newTicket] = useContext(TicketContext)
  console.log(newTicket)
  const [train, setTrain] = useContext(SelectTrainContext)
  const [show, setShow] = useState(false)
  return (
    <div className={styles.direction_wrapper}>
      <div className={styles.top}>
        <img className={styles.direction_img} style={{transform: direction === 'Обратно' ? 'rotate(180deg)' : 'rotate(0)'}} src={process.env.PUBLIC_URL + "/img/icons/arrow.svg"} alt="" />
        <p className={styles.direction_text}>{direction}</p>
        <p className={styles.direction_date}>
           {direction === 'Туда' ? getTrainsDate(newTicket.dateStart) : getTrainsDate(newTicket.dateEnd)}
        </p>
        <button className={styles.btn_open_close} onClick={()=> {
          setShow((prev)=> !prev)
        }}>
          <img src={show ? process.env.PUBLIC_URL + '/img/icons/minus.svg' : process.env.PUBLIC_URL + '/img/icons/plus.svg'} alt="" />
        </button>
      </div>
      {show ? <DirectionInfo direction={direction}/> : ''}
      
    </div>
  );
};

export default SideBarDirection;
