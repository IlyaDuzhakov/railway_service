import styles from "./PassengersList.module.css";
import CustomButton from "../../ui/CustomButton/CustomButton.jsx";

const PassengerStatus = ({
  type = "success",
  text = "",
  hint = "",
  buttonText = "",
  onButtonClick,
}) => {
  const isError = type === "error";

  return (
    <div
      className={`${styles.status} ${
        isError ? styles.status_error : styles.status_success
      }`}
    >
      <div className={styles.status_left}>
        <div
          className={`${styles.icon} ${
            isError ? styles.icon_error : styles.icon_success
          }`}
        >
          {isError ? "×" : "✓"}
        </div>

        <div className={styles.text_block}>
          <p className={styles.text}>{text}</p>
          {hint ? <p className={styles.hint}>{hint}</p> : null}
        </div>
      </div>

      {!isError && buttonText ? (
        <CustomButton
          variant="dark"
          className={styles.status_button}
          onClick={onButtonClick}
        >
          {buttonText}
        </CustomButton>
      ) : null}
    </div>
  );
};

export default PassengerStatus;
