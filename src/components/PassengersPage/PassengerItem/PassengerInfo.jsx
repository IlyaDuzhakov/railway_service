import styles from "../PassengersList/PassengersList.module.css";
import { useState } from "react";
import PassengerDetails from "../PassengerDetails";

const PassengerInfo = ({ passenger_info }) => {
  const [passenger, setPassenger] = useState({
    type: "adult",
    name: "",
    secondName: "",
    surname: "",
    date: "",
    gender: "M",
    checkbox: false,
    document_type: "passport",
    document_series: "",
    document_number: "",
  });


  return (
    <div className={styles.bottom}>
      <div className={styles.select_wrapper}>
        <select className={styles.select_age} value={passenger.type} onChange={(event)=> {
          setPassenger({...passenger, type: event.target.value})
        }}>
          <option value="adult">Взрослый</option>
          <option value="children">Детский</option>
          <option value="child_no_seat">Детский без места</option>
        </select>
        <img
          src={passenger_info + "triangular_arrow.svg"}
          className={styles.arrow}
          alt=""
        />
      </div>
      <div className={styles.initials_wrapper}>
        <div className={styles.initials}>
          <p className={styles.initials_text}>Фамилия</p>
          <input
            className={styles.initials_input}
            type="text"
            placeholder="Мартынюк"
            value={passenger.secondName}
            onChange={(event) => {
              setPassenger({ ...passenger, secondName: event.target.value });
            }}
          />
        </div>
        <div className={styles.initials}>
          <p className={styles.initials_text}>Имя</p>
          <input
            className={styles.initials_input}
            type="text"
            placeholder="Ирина"
            value={passenger.name}
            onChange={(event) => {
              setPassenger({ ...passenger, name: event.target.value });
            }}
          />
        </div>
        <div className={styles.initials}>
          <p className={styles.initials_text}>Отчество</p>
          <input
            className={styles.initials_input}
            type="text"
            placeholder="Эдуардовна"
            value={passenger.surname}
            onChange={(event) => {
              setPassenger({ ...passenger, surname: event.target.value });
            }}
          />
        </div>
      </div>

      <div className={styles.gender_wrapper}>
        <div className={styles.field}>
          <div className={styles.label}>Пол</div>

          <div className={styles.segment}>
            <button
              type="button"
              className={`${styles.segmentBtn} ${passenger.gender === "M" ? styles.active : ""}`}
              onClick={() => {
                setPassenger({ ...passenger, gender: "M" });
              }}
            >
              <span className={styles.btn_m}>М</span>
            </button>

            <button
              type="button"
              className={`${styles.segmentBtn} ${passenger.gender === "F" ? styles.active : ""}`}
              onClick={() => {
                setPassenger({ ...passenger, gender: "F" });
              }}
            >
              <span className={styles.btn_g}>Ж</span>
            </button>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>Дата рождения</div>
          <input
            className={styles.input}
            type="date"
            placeholder="ДД/ММ/ГГ"
            value={passenger.date}
            onChange={(event) => {
              setPassenger({ ...passenger, date: event.target.value });
            }}
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input
          className={styles.checkbox_input}
          type="checkbox"
          value={passenger.checkbox}
          onChange={(event) => {
            console.log(event.target.checked);
            setPassenger({ ...passenger, checkbox: event.target.checked });
          }}
        />
        <p className={styles.checkbox_text}>ограниченная подвижность</p>
      </div>
      <PassengerDetails passenger={passenger} setPassenger={setPassenger} />
      <div className={styles.btn_next_wrapper}>
        <button className={styles.btn_next}>
          <p className={styles.next_text}>Следующий пассажир</p>
        </button>
      </div>
    </div>
  );
};

export default PassengerInfo;
