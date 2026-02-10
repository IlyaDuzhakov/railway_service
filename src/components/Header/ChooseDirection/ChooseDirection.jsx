import updateIcon from "../../../assets/icons/update.svg";
import styles from "../HeaderMain/HeaderMain.module.css";
import {useState} from 'react'

const ChooseDirection = () => {

  

  const [from, setFrom] = useState('')

  const findCities = async (event) => {
    const responce = await fetch('https://students.netoservices.ru/fe-diplom/routes/cities?name=м')
    const data = await responce.json()
    
        setFrom(event.target.value)
  }

  return (
    <form className={styles.search_form}>
      <div className={styles.form_container}>
        <div className={styles.select_container}>
          <div className={styles.direction}>
            <div className={styles.form_title}>Направление</div>

            <div className={styles.choose_direction}>
              <input value={from}
                className={styles.input}
                type="text"
                placeholder="Откуда"
                onChange={(event) => {
                  findCities(event)
                }}
              />

              <img className={styles.update_icon} src={updateIcon} alt="swap" />

              <input className={styles.input} type="text" placeholder="Куда" />
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.form_title}>Дата</div>

            <div className={styles.choose_data}>
              <input className={styles.input} type="date" />
              <input className={styles.input} type="date" />
            </div>
          </div>
        </div>

        <button className={styles.submit_btn} type="submit">
          НАЙТИ БИЛЕТЫ
        </button>
      </div>
    </form>
  );
};

export default ChooseDirection;
