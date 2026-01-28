import updateIcon from "../../../assets/icons/update.svg";
import styles from '../HeaderMain/HeaderMain.module.css'

const ChooseDirection = () => {
  return (
     <form className={styles.search_form}>
              <div className={styles.form_title}>Направление</div>

              <div className={styles.choose_direction}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Откуда"
                />

                <img
                  className={styles.update_icon}
                  src={updateIcon}
                  alt="swap"
                />

                <input
                  className={styles.input}
                  type="text"
                  placeholder="Куда"
                />
              </div>

              <div className={styles.form_title}>Дата</div>

              <div className={styles.choose_data}>
                <input className={styles.input} type="date" />
                <input className={styles.input} type="date" />
              </div>

              <button className={styles.submit_btn} type="submit">
                НАЙТИ БИЛЕТЫ
              </button>
            </form>
  )
}

export default ChooseDirection