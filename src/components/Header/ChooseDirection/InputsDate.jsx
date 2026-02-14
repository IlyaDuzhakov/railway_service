import styles from './ChooseDirection.module.css'
import DateStart from './DateStart.jsx'
import DateEnd from './DateEnd.jsx'

const InputsDate = () => {
  return (
    <div className={styles.date}>
            <div className={styles.form_title}>Дата</div>

            <div className={styles.choose_data}>
              <DateStart />
              <DateEnd />
              
            </div>
          </div>
  )
}

export default InputsDate