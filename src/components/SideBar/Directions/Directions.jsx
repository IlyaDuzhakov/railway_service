import styles from "./Directions.module.css";
import DirectionItem from "./DirectionItem.jsx";

const Directions = () => {
  return (
    <div className={styles.directions_wrapper}>
      <div className={styles.forward}>
        <div className={styles.border_directions}></div>
        <DirectionItem forward='Туда'/>
        <div className={styles.border_line}></div>
        <DirectionItem forward='Обратно'/>
      </div>
    </div>
  );
};

export default Directions;
