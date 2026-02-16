// import iconPhone from '../../../../public/img/icons'
import Switch from "@mui/material/Switch";
import styles from "./Filters.module.css";
import { StylesProvider } from "@material-ui/styles";

const Filters = () => {
  const way = "/img/icons";

  const filtersList = [
    { title: "Купе", img: `${way}/train_compartment.svg` },
    { title: "Платцкарт", img: `${way}/reserved_seat.svg` },
    { title: "Сидячий", img: `${way}/seat.svg` },
    { title: "Люкс", img: `${way}/luxury.svg` },
    { title: "Wi-Fi", img: `${way}/Wi-Fi.svg` },
    { title: "Экспресс", img: `${way}/express.svg` },
  ];

  return (
    <div className={styles.filter_wrapper}>
      {filtersList.map((el, index) => {
        return (
          <div className={styles.filter} key={index}>
            <img src={el.img} alt="iconPhone" />
            <p className={styles.train_place}>{el.title}</p>

            <StylesProvider injectFirst>
              <Switch defaultChecked color="red" />
            </StylesProvider>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
