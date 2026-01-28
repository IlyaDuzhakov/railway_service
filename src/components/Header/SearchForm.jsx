import styles from '../Header/HeaderMain/HeaderMain.module.css'
import ChooseDirection from "./ChooseDirection/ChooseDirection";

const SearchForm = () => {
  return (
    <div className={styles.container}>
        <div className={styles.search_tickets}>
          <div className={styles.search_tickets_wrapper}>
            <div className={styles.search_tickets_text}>
              <div className={styles.title_thin}>Вся жизнь —</div>
              <div className={styles.title_bold}>путешествие!</div>
            </div>

           <ChooseDirection />
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
  )
}

export default SearchForm