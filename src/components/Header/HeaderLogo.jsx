import styles from '../Header/HeaderMain/HeaderMain.module.css'
import trainIcon from "../../assets/icons/railway_service.svg";


const HeaderLogo = () => {
  return (
    <div className={styles.top_bar}>
        <div id="live"  className={styles.logo_container}>
          <img className={styles.logo} src={trainIcon} alt="Railway service" />
        </div>
      </div>
  )
}

export default HeaderLogo