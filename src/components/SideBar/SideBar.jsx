import SelectDate from "./Date/SelectDate.jsx";
import styles from "./SideBar.module.css";
import Filters from "./Filters/Filters.jsx";
import PriceRange from "./PriceRange/PriceRange.jsx";
import Directions from "./Directions/Directions.jsx";
import LastTrains from "./LastTrains/LastTrains.jsx";

const SideBar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside_top}>
        <SelectDate />
        <Filters />
        <PriceRange />
        <Directions />
      </div>

      <LastTrains />
    </aside>
  );
};

export default SideBar;
