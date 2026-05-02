import CustomSelect from "../ui/CustomSelect/CustomSelect";
import styles from "./PassengerDetails.module.css";

const PassengerDetails = ({
  passenger,
  onUpdate,
  onValidationChange,
  onResetValidation,
}) => {
  const validatePassportSeries = (value) => /^\d{4}$/.test(value.trim());
  const validatePassportNumber = (value) => /^\d{6}$/.test(value.trim());
  const validateBirthCertificate = (value) =>
    /^[IVXLCDM]+-[А-ЯЁ]{2}-\d{6}$/.test(value.trim().toUpperCase());

  const handleDocumentTypeChange = (event) => {
    onUpdate(passenger.id, {
      document_type: event.target.value,
      document_series: "",
      document_number: "",
    });

    onResetValidation();
  };

  const handleSeriesChange = (event) => {
    const cleanValue = event.target.value.replace(/\D/g, "").slice(0, 4);

    onUpdate(passenger.id, { document_series: cleanValue });

    const isSeriesValid = validatePassportSeries(cleanValue);
    const isNumberValid = validatePassportNumber(
      passenger.document_number || "",
    );

    onValidationChange(isSeriesValid && isNumberValid);
  };

  const handleNumberChange = (event) => {
    let value = event.target.value;

    if (passenger.document_type === "passport") {
      value = value.replace(/\D/g, "").slice(0, 6);

      const isSeriesValid = validatePassportSeries(
        passenger.document_series || "",
      );
      const isNumberValid = validatePassportNumber(value);

      onUpdate(passenger.id, { document_number: value });
      onValidationChange(isSeriesValid && isNumberValid);
    } else {
      value = value.toUpperCase();

      const isBirthValid = validateBirthCertificate(value);

      onUpdate(passenger.id, { document_number: value });
      onValidationChange(isBirthValid);
    }
  };

  const documentOptions = [
    { value: "passport", label: "Паспорт РФ" },
    { value: "document_child", label: "Свидетельство о рождении" },
  ];

  return (
    <div className={styles.document_row}>
      <div className={styles.document_field}>
        <div className={styles.label}>Тип документа</div>
        {/* <div
          className={styles.document_type_text}
          style={{
            width: passenger.document_type === "passport" ? "200px" : "320px",
          }}
        > */}
        <div
          className={`${styles.document_type_text} ${
            passenger.document_type === "passport"
              ? styles.passport_width
              : styles.birth_width
          }`}
        >
          {passenger.document_type === "passport"
            ? "Паспорт РФ"
            : "Свидетельство о рождении"}
        </div>
      </div>

      {passenger.document_type === "passport" ? (
        <div className={styles.document_field}>
          <div className={styles.label}>Серия</div>
          <input
            className={styles.input}
            placeholder="__ __ __ __"
            value={passenger.document_series || ""}
            onChange={handleSeriesChange}
          />
        </div>
      ) : null}

      <div className={styles.document_field}>
        <div className={styles.label}>Номер</div>
        <input
          className={styles.input}
          placeholder={
            passenger.document_type === "passport"
              ? "__ __ __ __ __ __"
              : "VIII-ЫП-123456"
          }
          value={passenger.document_number || ""}
          onChange={handleNumberChange}
        />
      </div>
    </div>
  );
};

export default PassengerDetails;
