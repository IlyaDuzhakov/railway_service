import styles from "./Popup.module.css";

const Popup = ({
  type = "info",
  title = "",
  message = "",
  buttonText = "Понятно",
  onClose,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.popup} ${styles[type]}`}
        onClick={(e) => e.stopPropagation()} // чтобы не закрывался при клике внутри
      >
        <div className={styles.top}>
          <span className={styles.icon}>
            {type === "error" ? "!" : "i"}
          </span>
        </div>

        <div className={styles.content}>
          <h2>{title}</h2>
          <p className={styles.popup_message}>{message}</p>
        </div>

        <div className={styles.bottom}>
          <button className={styles.btn_clear} onClick={onClose}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;