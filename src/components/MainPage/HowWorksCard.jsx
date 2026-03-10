import styles from "./MainPage.module.css";

const HowWorksCard = ({ el }) => {
  return (
    <div className={styles.how_works_card}>
      <img className={styles.img} src={el.path} alt="" />
      <p className={styles.text}>{el.text}</p>
    </div>
  );
};

export default HowWorksCard;
