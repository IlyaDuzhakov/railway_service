import styles from "../PassengersList/PassengersList.module.css";
import { useState } from "react";
import PassengerDetails from "../PassengerDetails.jsx";
import PassengerStatus from "../PassengersList/PassengerStatus.jsx";
import { getAge } from "../../../helpers/functions.js";
import CustomSelect from "../../ui/CustomSelect/CustomSelect.jsx";
import Popup from "../../ui/Popup/Popup.jsx";

const PassengerInfo = ({ passenger_info, passenger, onUpdate }) => {
  const nameRegex = /^[A-Za-zА-Яа-яЁё-]+$/;
  const [documentCheckStarted, setDocumentCheckStarted] = useState(false);
  const [documentValid, setDocumentValid] = useState(null);
  const [surnameError, setSurnameError] = useState(false);
  const [secondNameError, setSecondNameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const validateAge = (date, type) => {
    if (!date) return false;

    const age = getAge(date);

    if (type === "adult") {
      return age >= 14;
    }

    return age < 14;
  };

  const passengerTypeOptions = [
    { value: "adult", label: "Взрослый" },
    { value: "children", label: "Детский" },
    { value: "child_no_seat", label: "Детский без места" },
  ];

  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className={styles.bottom}>
      <div className={styles.select_wrapper}>
        <CustomSelect
          value={passenger.type}
          options={passengerTypeOptions}
          onChange={(value) => {
            const documentType =
              value === "adult" ? "passport" : "document_child";

            onUpdate(passenger.id, {
              type: value,
              document_type: documentType,
              document_series: "",
              document_number: "",
              isDocumentValid: false,
              isDateValid: false,
            });
            setDateError(false);
            setDocumentCheckStarted(false);
            setDocumentValid(null);
          }}
        />
        <img
          src={passenger_info + "triangular_arrow.svg"}
          className={styles.arrow}
          alt=""
        />
      </div>

      <div className={styles.initials_wrapper}>
        <div className={styles.initials}>
          <p className={styles.initials_text}>Фамилия</p>
          <input
            className={styles.initials_input}
            type="text"
            placeholder="Мартынюк"
            value={passenger.secondName}
            onChange={(event) => {
              const value = event.target.value;

              onUpdate(passenger.id, { secondName: value });

              if (value === "") {
                setSecondNameError(false);
              } else {
                setSecondNameError(!nameRegex.test(value));
              }
            }}
          />
          {secondNameError && (
            <p style={{ color: "red" }}>Допустимы только буквы (рус/анг)</p>
          )}
        </div>

        <div className={styles.initials}>
          <p className={styles.initials_text}>Имя</p>
          <input
            className={styles.initials_input}
            type="text"
            placeholder="Ирина"
            value={passenger.name}
            onChange={(event) => {
              const value = event.target.value;

              onUpdate(passenger.id, { name: value });

              if (value === "") {
                setNameError(false);
              } else {
                setNameError(!nameRegex.test(value));
              }
            }}
          />
          {nameError && (
            <p style={{ color: "red" }}>Допустимы только буквы (рус/анг)</p>
          )}
        </div>

        <div className={styles.initials}>
          <p className={styles.initials_text}>Отчество</p>
          <input
            className={styles.initials_input}
            type="text"
            placeholder="Эдуардовна"
            value={passenger.surname}
            onChange={(event) => {
              const value = event.target.value;

              onUpdate(passenger.id, { surname: value });

              if (value === "") {
                setSurnameError(false);
              } else {
                setSurnameError(!nameRegex.test(value));
              }
            }}
          />
          {surnameError && (
            <p style={{ color: "red" }}>Допустимы только буквы (рус/анг)</p>
          )}
        </div>
      </div>

      <div className={styles.gender_wrapper}>
        <div className={styles.field}>
          <div className={styles.label}>Пол</div>

          <div className={styles.segment}>
            <button
              type="button"
              className={`${styles.segmentBtn} ${
                passenger.gender === "M" ? styles.active : ""
              }`}
              onClick={() => {
                onUpdate(passenger.id, { gender: "M" });
              }}
            >
              <span className={styles.btn_m}>М</span>
            </button>

            <button
              type="button"
              className={`${styles.segmentBtn} ${
                passenger.gender === "F" ? styles.active : ""
              }`}
              onClick={() => {
                onUpdate(passenger.id, { gender: "F" });
              }}
            >
              <span className={styles.btn_g}>Ж</span>
            </button>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.label}>Дата рождения</div>
          <input
            className={styles.input}
            type="date"
            value={passenger.date}
            onChange={(event) => {
              const value = event.target.value;

              if (value === "") {
                onUpdate(passenger.id, {
                  date: value,
                  isDateValid: false,
                });
                setDateError(false);
                return;
              }

              const isValid = validateAge(value, passenger.type);

              onUpdate(passenger.id, {
                date: value,
                isDateValid: isValid,
              });

              setDateError(!isValid);
            }}
          />
        </div>
        {dateError && (
          <p style={{ color: "red" }}>
            {passenger.type === "adult"
              ? "Для паспорта возраст должен быть не меньше 14 лет"
              : "Для свидетельства возраст должен быть меньше 14 лет"}
          </p>
        )}
      </div>

      <label className={styles.checkbox_label}>
        <input
          className={styles.checkbox_input}
          type="checkbox"
          checked={!!passenger.checkbox}
          onChange={(event) => {
            onUpdate(passenger.id, { checkbox: event.target.checked });
          }}
        />
        <span className={styles.custom_checkbox}></span>
        <span className={styles.checkbox_text}>ограниченная подвижность</span>
        <span
          className={styles.popup_information}
          onClick={() => setIsInfoOpen(true)}
        >
          i
        </span>
      </label>
      <Popup
        type="info"
        title=""
        message="Если вам требуется помощь при передвижении, отметьте этот пункт. 
Сотрудники вокзала помогут вам и сопроводят до вагона."
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />

      <PassengerDetails
        passenger={passenger}
        onUpdate={onUpdate}
        onValidationChange={(isValid) => {
          setDocumentCheckStarted(true);
          setDocumentValid(isValid);

          onUpdate(passenger.id, {
            isDocumentValid: isValid,
          });
        }}
        onResetValidation={() => {
          setDocumentCheckStarted(false);
          setDocumentValid(null);

          onUpdate(passenger.id, {
            isDocumentValid: false,
          });
        }}
      />

      {!documentCheckStarted ? (
        <div className={styles.btn_next_wrapper}>
          <button className={styles.btn_next}>
            <p className={styles.next_text}>Следующий пассажир</p>
          </button>
        </div>
      ) : documentValid === false ? (
        <PassengerStatus
          type="error"
          text={
            passenger.document_type === "passport"
              ? "Номер или серия паспорта указаны некорректно"
              : "Номер свидетельства о рождении указан некорректно"
          }
          hint={
            passenger.document_type === "passport"
              ? "Серия: 4 цифры, номер: 6 цифр"
              : "Пример: VIII-ЫП-123456"
          }
        />
      ) : (
        <PassengerStatus
          type="success"
          text="Готово"
          buttonText="Следующий пассажир"
          onButtonClick={() => {
            console.log("next passenger");
          }}
        />
      )}
    </div>
  );
};

export default PassengerInfo;
