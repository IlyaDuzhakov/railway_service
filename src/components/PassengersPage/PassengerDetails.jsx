import styles from "./PassengerDetails.module.css";

const PassengerDetails = ({ passenger, setPassenger }) => {
  return (
    <>
      <div className={styles.document_row}>
        <div className={styles.document_field}>
          <div className={styles.label}>Тип документа</div>
          <select
            className={styles.select}
            value={passenger.document_type}
            onChange={(event) => {
              setPassenger({ ...passenger, document_type: event.target.value });
            }}
          >
            <option value="passport">Паспорт РФ</option>
            <option value="document_child">Свидетельство о рождении</option>
          </select>
        </div>

        <div className={styles.document_field}>
          <div className={styles.label}>Серия</div>
          <input
            className={styles.input}
            placeholder="__  __  __  __ "
            value={passenger.series}
            onChange={(event)=> {
              setPassenger({...passenger, document_series: event.target.value})
            }}
          />
        </div>
        <div className={styles.document_field}>
          <div className={styles.label}>Номер</div>
          <input
            className={styles.input}
            placeholder="__  __  __  __  __  __"
            value={passenger.document_number}
            onChange={(event)=> {
              setPassenger({...passenger, document_number: event.target.value})
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;
