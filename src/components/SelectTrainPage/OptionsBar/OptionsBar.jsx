import styles from './OptionsBar.module.css'
import {useState, useContext, useEffect} from 'react'
import { sortTrains } from '../../../helpers/functions.js'
import {TrainContext, ShowTrainsContext} from '../../../helpers/context.js'


const OptionsBar = () => {
  const [selectedSort, setSelectedSort] = useState("min_price");
  const [trains, setTrains] = useContext(TrainContext)
  const [showTrains, setshowTrains] = useContext(ShowTrainsContext)
  

 useEffect(()=> {
    const rezult = sortTrains(trains, "min_price")
    setshowTrains(rezult)
 },[])

  return (
    <div className={styles.button_choose}>
      <div>
        <p className={styles.found}>найдено</p>
      </div>
      <div className={styles.button_select}>
        <p className={styles.select_text}>сортировать по:</p>
        <select className={styles.select}
          name=""
          id=""
          value={selectedSort}
          onChange={(event) => {
            setSelectedSort(event.target.value);
            const rezultSort = sortTrains(trains ,event.target.value)
            setshowTrains(rezultSort)
          }}
        >
          
          <option value="min_price">стоимости</option>
          <option value="duration">времени в пути</option>
        </select>
      </div>
      <div className={styles.show_numbers}>
        <p className={styles.show_text}>показывать по:</p>
        <button className={styles.number}>5</button>
        <button className={styles.number}>10</button>
        <button className={styles.number}>20</button>
      </div>
    </div>
  );
};

export default OptionsBar;
