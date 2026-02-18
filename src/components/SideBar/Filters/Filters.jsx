import styles from "./Filters.module.css";
import { useState } from "react";

import FilterItem from "./FilterItem";

const Filters = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const way = "/img/icons";

  const filtersList = [
    {
      title: "Купе",
      img: `${way}/train_compartment.svg`,
      label: "have_second_class",
    },
    {
      title: "Платцкарт",
      img: `${way}/reserved_seat.svg`,
      label: "have_third_class",
    },
    { title: "Сидячий", img: `${way}/seat.svg`, label: "have_fourth_class" },
    { title: "Люкс", img: `${way}/luxury.svg`, label: "have_first_class" },
    { title: "Wi-Fi", img: `${way}/Wi-Fi.svg`, label: "have_wifi" },
    { title: "Экспресс", img: `${way}/express.svg`, label: "is_express" },
  ];

  return (
    <div className={styles.filter_wrapper}>
      {filtersList.map((el, index) => {
        return (
          <FilterItem
            el={el}
            index={index}
            key={el.label}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        );
      })}
      <div className={styles.filter_border}></div>
    </div>
  );
};

export default Filters;
