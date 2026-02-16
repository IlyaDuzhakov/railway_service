import styles from "./Directions.module.css";
import DirectionItem from "./DirectionItem.jsx";

const Directions = () => {
  return (
    <div className={styles.directions_wrapper}>
      <div className={styles.forward}>
        <DirectionItem forward='Туда'/>
        <DirectionItem forward='Обратно'/>
      </div>
    </div>
  );
};

export default Directions;
