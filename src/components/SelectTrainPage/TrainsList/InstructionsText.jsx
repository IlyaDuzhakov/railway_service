import styles from "../../../pages/SelectTrain/SelectTrain.module.css";

const InstructionsText = () => {
  return (
    <div className={styles.ticket_wrapper}>
      <div className={styles.ticket}>
        <h2 className={styles.ticket_text}>
          По выбранному направлению и датам билеты не найдены. Выберите другие города и/или даты.
        </h2>
        <img
          className={styles.ticket_icon}
          src={process.env.PUBLIC_URL + "/img/icons/train_ticket.svg"}
          alt="ticket"
        />
      </div>
    </div>
  );
};

export default InstructionsText;
