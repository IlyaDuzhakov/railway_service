import styles from "../../../pages/SelectTrain/SelectTrain.module.css";

const InstructionsText = () => {
  return (
    <div className={styles.ticket_wrapper}>
      <div className={styles.ticket}>
        <h2 className={styles.ticket_text}>
          Выберите города и даты и нажмите на кнопку "найти билеты"
        </h2>
        <img
          className={styles.ticket_icon}
          src="/img/icons/train_ticket.svg"
          alt="ticket"
        />
      </div>
    </div>
  );
};

export default InstructionsText;
