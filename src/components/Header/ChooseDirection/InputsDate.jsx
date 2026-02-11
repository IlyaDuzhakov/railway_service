import styles from './ChooseDirection.module.css'
import Date from './Date.jsx'

const InputsDate = () => {
  return (
    <div className={styles.date}>
            <div className={styles.form_title}>Дата</div>

            <div className={styles.choose_data}>
              <Date />
              <Date />
              
            </div>
          </div>
  )
}

export default InputsDate