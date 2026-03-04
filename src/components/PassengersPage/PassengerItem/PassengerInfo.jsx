import styles from '../PassengersList/PassengersList.module.css'
import {useState} from 'react'
import PassengerDetails from '../PassengerDetails';

const PassengerInfo = ({passenger}) => {
    const [gender, setGender] = useState("Ж");
  return (
    <div className={styles.bottom}>
        <div className={styles.select_wrapper}>
          <select className={styles.select_age}>
            <option value="adult">Взрослый</option>
            <option value="child">Детский</option>
          </select>
          <img
            src={passenger + "triangular_arrow.svg"}
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
            />
          </div>
          <div className={styles.initials}>
            <p className={styles.initials_text}>Имя</p>
            <input
              className={styles.initials_input}
              type="text"
              placeholder="Ирина"
            />
          </div>
          <div className={styles.initials}>
            <p className={styles.initials_text}>Отчество</p>
            <input
              className={styles.initials_input}
              type="text"
              placeholder="Эдуардовна"
            />
          </div>
        </div>

        <div className={styles.gender_wrapper}>
          <div className={styles.field}>
            <div className={styles.label}>Пол</div>

            <div className={styles.segment}>
              <button
                type="button"
                className={`${styles.segmentBtn} ${gender === "M" ? styles.active : ""}`}
                onClick={() => setGender("M")}
              >
                <span className={styles.btn_m}>М</span>
              </button>

              <button
                type="button"
                className={`${styles.segmentBtn} ${gender === "F" ? styles.active : ""}`}
                onClick={() => setGender("F")}
              >
                <span className={styles.btn_g}>Ж</span>
              </button>
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>Дата рождения</div>
            <input className={styles.input} placeholder="ДД/ММ/ГГ" />
          </div>
        </div>
        <div className={styles.checkbox}>
          <input className={styles.checkbox_input} type="checkbox" />
          <p className={styles.checkbox_text}>ограниченная подвижность</p>
        </div>
        <PassengerDetails passenger={passenger} />
        <div className={styles.btn_next_wrapper}>
          <button className={styles.btn_next}>
            <p className={styles.next_text}>Следующий пассажир</p>
          </button>
        </div>
      </div>
  )
}

export default PassengerInfo