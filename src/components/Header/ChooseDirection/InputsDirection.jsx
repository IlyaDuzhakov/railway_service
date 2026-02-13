import styles from "./ChooseDirection.module.css";
import updateIcon from "../../../assets/icons/update.svg";
const InputsDirection = ({ from, setFrom, to, setTo, listCitiesFrom, listCitiesTo}) => {
  return (
    <div className={styles.direction}>
      <div className={styles.form_title}>Направление</div>

      <div className={styles.choose_direction}>
        <div className={styles.input_container}>
          <input
            value={from}
            className={styles.input}
            type="text"
            placeholder="Откуда"
            onChange={(event) => {
              setFrom(event.target.value);
            }}
          />
          <div className={styles.cities_box}>
            {from !== "" ? listCitiesFrom.map((el, index) => {
              return (
                <p
                  className={styles.city}
                  key={index}
                  onClick={() => {
                    // setListCities([])
                    setFrom(el.name);
                  }}
                >
                  {el.name}
                </p>
              );
            }) : "" }
          </div>
        </div>
        <img className={styles.update_icon} src={updateIcon} alt="swap" />
        <div className={styles.input_container}>
          <input
            value={to}
            className={styles.input}
            type="text"
            placeholder="Куда"
            onChange={(event) => {
              setTo(event.target.value);
            }}
          />
          <div className={styles.cities_box}>
            { to !== "" ? listCitiesTo.map((el, index) => {
              return (
                <p
                  className={styles.city}
                  key={index}
                  onClick={() => {
                    // setListCities([])
                    setTo(el.name);
                  }}
                >
                  {el.name}
                </p>
              );
            }) : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputsDirection;
