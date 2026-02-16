import styles from "./Directions.module.css";

const DirectionItem = ({ forward }) => {

    const rotate = forward === 'Обратно' ? 'rotate(-180deg)' : 'rotate(0)'
  return (
    <div className={styles.forward_top}>
      <div className={styles.forward_left}>
        <img style={{transform: rotate}} src="/img/icons/arrow.svg" alt="" />
        <p>{forward}</p>
      </div>
      <div className={styles.forward_right}>
        <img src="/img/icons/plus.svg" alt="" />
      </div>
    </div>
  );
};

export default DirectionItem;
