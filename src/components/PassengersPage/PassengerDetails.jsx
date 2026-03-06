import styles from "./PassengerDetails.module.css";
import { useState } from "react";

const PassengerDetails = ({ passenger, setPassenger }) => {
  const [showPassportSeries, setShowPassportSeries] = useState(false);
  const [showPassportNumber, setShowPassportNumber] = useState(false);

  const checkPassportSeries = (event) => {
    const regExp = /^\d{4}$/;
    if (regExp.test(event.target.value)) {
      setShowPassportSeries(false);
    } else {
      setShowPassportSeries(true);
    }
  };

  const checkPassportNumber = (event) => {
    const regExpPassport = /^\d{6}$/;
    if (passenger.document_type === "passport") {
      if (regExpPassport.test(event.target.value)) {
        setShowPassportNumber(false);
      } else {
        setShowPassportNumber(true);
      }
    }
  };

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
        {passenger.document_type === "passport" ? (
          <div className={styles.document_field}>
            <div className={styles.label}>Серия</div>
            <input
              className={styles.input}
              placeholder="__  __  __  __ "
              value={passenger.series}
              onChange={(event) => {
                setPassenger({
                  ...passenger,
                  document_series: event.target.value,
                });
                checkPassportSeries(event);
              }}
            />
            {showPassportSeries ? (
              <p style={{ color: "red" }}>Серия должна состоять из 4 цифр</p>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <div className={styles.document_field}>
          <div className={styles.label}>Номер</div>
          <input
            className={styles.input}
            placeholder="__  __  __  __  __  __"
            value={passenger.document_number}
            onChange={(event) => {
              setPassenger({
                ...passenger,
                document_number: event.target.value,
              });
              checkPassportNumber(event)
            }}
          />
          {passenger.document_type === "passport" && showPassportNumber ? (
            <p style={{ color: "red" }}>
              Номер паспорта дожен содержать 6 цифр
            </p>
          ) : passenger.document_type === "document_child" &&
            showPassportNumber ? (
            <p style={{ color: "red" }}>
              Номер свидетельства о Рождении должен быть в формате VIII УН
              256319
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;
