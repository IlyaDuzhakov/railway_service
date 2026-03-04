import styles from "./PassengerDetails.module.css";

const PassengerDetails = ({ passenger }) => {
  return (
    <>
      <div className={styles.document_row}>
        <div className={styles.document_field}>
          <div className={styles.label}>Тип документа</div>
          <select className={styles.select}>
            <option>Паспорт РФ</option>
            <option>Свидетельство о рождении</option>
          </select>
        </div>

        <div className={styles.document_field}>
          <div className={styles.label}>Серия</div>
          <input className={styles.input} placeholder="__  __  __  __ "/>
        </div>
        <div className={styles.document_field}>
          <div className={styles.label}>Номер</div>
          <input className={styles.input} placeholder="__  __  __  __  __  __"/>
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;


