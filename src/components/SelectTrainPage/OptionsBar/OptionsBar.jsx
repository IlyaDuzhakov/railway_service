import styles from "./OptionsBar.module.css";
import { useState, useContext, useEffect } from "react";
import { sortTrains } from "../../../helpers/functions.js";
import { TrainContext, ShowTrainsContext } from "../../../helpers/context.js";
import CustomSelect from "../../ui/CustomSelect/CustomSelect.jsx";

const OptionsBar = () => {
  const [selectedSort, setSelectedSort] = useState("min_price");
  const [trains] = useContext(TrainContext);
  const [showTrains, setshowTrains] = useContext(ShowTrainsContext);

  const sortOptions = [
    { value: "min_price", label: "стоимости" },
    { value: "duration", label: "времени в пути" },
  ];

  useEffect(() => {
    const rezult = sortTrains(trains, "min_price");
    setshowTrains(rezult);
  }, [setshowTrains, trains]);

  return (
    <div className={styles.button_choose}>
      <div>
        <p className={styles.found}>найдено: {showTrains.length}</p>
      </div>
      <div className={styles.button_select}>
        <p className={styles.select_text}>сортировать по:</p>
        <CustomSelect
          variant="sort"
          value={selectedSort}
          options={sortOptions}
          onChange={(value) => {
            setSelectedSort(value);
            const rezultSort = sortTrains(trains, value);
            setshowTrains(rezultSort);
          }}
        />
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
