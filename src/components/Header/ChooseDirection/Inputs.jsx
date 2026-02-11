import styles from './ChooseDirection.module.css'
import InputsDate from './InputsDate';

import InputsDirection from './InputsDirection';

const Inputs = ({from, setFrom, listCities }) => {
  return (
     <div className={styles.select_container}>
          <InputsDirection from={from} setFrom={setFrom} listCities={listCities}/>
          <InputsDate />
        </div>
  )
}

export default Inputs