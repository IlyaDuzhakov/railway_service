import styles from "./Filters.module.css";
import { StylesProvider } from "@material-ui/styles";
import Switch from "@mui/material/Switch";
import { useContext, useState } from "react";
import { filterTrains } from "../../../helpers/functions";
import {TrainContext, ShowTrainsContext } from '../../../helpers/context.js'
  

const FilterItem = ({ el, index, activeFilters, setActiveFilters }) => {
  
  const [trains, setTrains] = useContext(TrainContext)
  const [showTrains, setshowTrains] = useContext(ShowTrainsContext)
  const [checked, setChecked] = useState(false);
  const handleSwitch = (event) => {
    setChecked((prev) => !prev);
    if (checked === false ) {
        setActiveFilters([...activeFilters, event.target.name])
        // const rezult = filterTrains(trains, event.target.name)
        // setshowTrains(rezult)
    }
    else {
        // setshowTrains(trains) // отображаем все поезда
        // написать логику, которая будет удалять текущий фильтр из списка фильтров
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
