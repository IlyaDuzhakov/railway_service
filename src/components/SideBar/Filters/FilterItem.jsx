import styles from "./Filters.module.css";
import { StylesProvider } from "@material-ui/styles";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { filterTrains } from "../../../helpers/functions";

const FilterItem = ({ el, index }) => {
  const [checked, setChecked] = useState(false);
  const handleSwitch = (event) => {
    setChecked((prev) => !prev);
    if (checked === false ) {
        console.log(event.target.name)
    }
  };

  return (
    <div className={styles.filter} key={index}>
      <img src={el.img} alt="iconPhone" />
      <p className={styles.train_place}>{el.title}</p>

      <StylesProvider injectFirst>
        <Switch
          color="red"
          checked={checked}
          name={el.label}
          onChange={(event) => {
            handleSwitch(event);
          }}
        />
      </StylesProvider>
    </div>
  );
};

export default FilterItem;
