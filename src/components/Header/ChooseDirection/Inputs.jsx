import styles from "./ChooseDirection.module.css";
import InputsDate from "./InputsDate";

import InputsDirection from "./InputsDirection";

const Inputs = ({ from, setFrom, to, setTo, listCitiesFrom, listCitiesTo }) => {
  return (
    <div className={styles.select_container}>
      <InputsDirection
        from={from}
        setFrom={setFrom}
        listCitiesFrom={listCitiesFrom}
        listCitiesTo={listCitiesTo}
        to={to}
        setTo={setTo}
        
      />
      <InputsDate />
    </div>
  );
};

export default Inputs;
