import styles from "./Filters.module.css";
import { StylesProvider } from "@material-ui/styles";
import Switch from "@mui/material/Switch";
import { useContext, useState } from "react";
import { filterTrains } from "../../../helpers/functions";
import {TrainContext, ShowTrainsContext } from '../../../helpers/context.js'
import { deleteFilter } from "../../../helpers/functions";
  

const FilterItem = ({ el, index, activeFilters, setActiveFilters }) => {
  
  const [trains, setTrains] = useContext(TrainContext)
  const [showTrains, setshowTrains] = useContext(ShowTrainsContext)
  const [checked, setChecked] = useState(false);
  const handleSwitch = (event) => {
    setChecked((prev) => {
        // console.log(prev) 
        if (prev === false ) {
            setActiveFilters([...activeFilters, event.target.name])
            const actualTrains = filterTrains(trains, [...activeFilters, event.target.name])
            setshowTrains(actualTrains)
        }
        else {
            const rezult = deleteFilter(activeFilters, event.target.name)
            setActiveFilters(rezult)
            const actualTrains = filterTrains(trains, rezult)
            setshowTrains(actualTrains)
        }
        // console.log(activeFilters)
        return !prev
});
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
            // console.log(activeFilters)
          }}

        />
      </StylesProvider>
    </div>
  );
};

export default FilterItem;
