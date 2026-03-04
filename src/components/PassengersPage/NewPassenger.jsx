import styles from "./PassengerDetails.module.css";

const NewPassenger = () => {
  return (
    <div className={styles.new_passenger_wrapper}>
        <div className={styles.new_passenger}>
            <img src="/img/icons/passenger/plus_active.svg" alt="plus" />
        <span className={styles.new_passenger_text}>Пассажир 3</span>
        </div>
    </div>
  )
}

export default NewPassenger