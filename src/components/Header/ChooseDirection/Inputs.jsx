import styles from "./ChooseDirection.module.css";
import InputsDate from "./InputsDate";

import InputsDirection from "./InputsDirection";

const Inputs = ({ listCitiesFrom, listCitiesTo }) => {
  return (
    <div className={styles.select_container}>
      <InputsDirection
        listCitiesFrom={listCitiesFrom}
        listCitiesTo={listCitiesTo}
      />
      <InputsDate />
    </div>
  );
};

export default Inputs;
