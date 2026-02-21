import styles from './OptionsBar.module.css'
import {useState, useContext} from 'react'
import { sortTrains } from '../../../helpers/functions.js'
import {TrainContext} from '../../../helpers/context.js'


const OptionsBar = () => {
  const [selectedSort, setSelectedSort] = useState("min_price");
  const [trains, setTrains] = useContext(TrainContext)
  return (
    <div className={styles.button_choose}>
      <div>
        <p>найдено</p>
      </div>
      <div>
        <p>сортировать по:</p>
        <select
          name=""
          id=""
          value={selectedSort}
          onChange={(event) => {
            setSelectedSort(event.target.value);
            const rezultSort = sortTrains(trains ,selectedSort)
          }}
        >
          {/* <option value="time">времени</option> */}
          <option value="min_price">стоимости</option>
          <option value="duration">времени в пути</option>
        </select>
      </div>
      <div>
        <p>показывать по:</p>
        <button>5</button>
        <button>10</button>
        <button>20</button>
      </div>
    </div>
  );
};

export default OptionsBar;
