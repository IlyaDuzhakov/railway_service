import styles from '../SeatsSelect/SeatsSelect.module.css'

const CountTicket = () => {
  return (
    <>
      <p className={styles.number_tickets}>Количество билетов</p>
      <div className={styles.passengers_row}>
        <div className={styles.passengers_card}>
          
            <input
              className={styles.passengers_input}
              type="number"
              placeholder="Взрослых — 2"
            />
            <p>Можно добавить еще 3 пассажиров </p>
          
        </div>
        <div className={styles.passengers_card}>
          
            <input
              className={styles.passengers_input}
              type="number"
              placeholder="Детских — 1"
            />
            <p>
              Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у
              взрослых, но дешевле в среднем на 50-65%
            </p>
          
        </div>
        <div className={styles.passengers_card}>
          <input
            className={styles.passengers_input}
            type="number"
            placeholder="Детских «без места» — 0"
          />
        </div>
      </div>
    </>
  );
};

export default CountTicket;
