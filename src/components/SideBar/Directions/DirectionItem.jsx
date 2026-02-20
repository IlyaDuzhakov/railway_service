import ArrivalTime from "./ArrivalTime";
import styles from "./Directions.module.css";
import { useState } from "react";

const DirectionItem = ({ forward }) => {
  const [showTime, setShowTime] = useState(false);

  const rotate = forward === "Обратно" ? "rotate(-180deg)" : "rotate(0)";
  return (
    <>
      <div className={styles.forward_top}>
        <div className={styles.forward_left}>
          <img
            style={{ transform: rotate }}
            src="/img/icons/arrow.svg"
            alt=""
          />
          <p className={styles.forward_text}>{forward}</p>
        </div>
        <div className={styles.forward_right}>
          <button
            className={styles.btns}
            onClick={() => {
              showTime === false ? setShowTime(true) : setShowTime(false);
              // setShowTime((prev)=> !prev) // получаем доступ к прошлому значению и меняем его на противоположный
            }}
          >
            {showTime === false ? (
              <img
                className={styles.btn}
                src="/img/icons/plus.svg"
                alt="plus"
              />
            ) : (
              <img
                className={styles.btn}
                src="/img/icons/minus.svg"
                alt="minus"
              />
            )}
          </button>
        </div>
      </div>
      {showTime === true ? <ArrivalTime /> : ""}
    </>
  );
};

export default DirectionItem;
