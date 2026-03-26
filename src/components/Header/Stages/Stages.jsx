import { useEffect } from "react";
import styles from "./Stages.module.css";

const Stages = () => {
  const getPath = () => {
    const path = window.location.pathname.split("/");
    if (path.includes("select_seats")) {
      console.log(path[path.length - 2]);
      return path[path.length - 2];
    } else {
      console.log(path[path.length - 1]);
      return path[path.length - 1];
    }
  };

  const arrPath = [
    "select_train",
    "select_seats",
    "passengers",
    "payment",
    "confirm_order",
    "successful_order",
  ];

  const passengers = arrPath.indexOf(getPath()) >= 2 ? "#FFA800" : "#3E3C41";
  const payments = arrPath.indexOf(getPath()) >= 3 ? "#FFA800" : "#3E3C41";
  const confirm = arrPath.indexOf(getPath()) >= 4 ? "#FFA800" : "#3E3C41";
 
  return (
    <div className={styles.stages}>
      <div style={{backgroundColor: confirm}} className={styles.stages_color}></div>
      <div className="container">
        <div className={styles.stages_btns}>
          <button
            style={{ backgroundColor: passengers }}
            className={styles.stages_btn}
          >
            <div
              className={styles.stage_title}
              style={{ backgroundColor: "#FFA800" }}
            >
              <div className={styles.number}>1</div>
              <span className={styles.title}>Билеты</span>
            </div>
            <div
              style={{ backgroundColor: "#FFA800" }}
              className={styles.arrow}
            ></div>
          </button>
          <button style={{backgroundColor: payments}} className={styles.stages_btn}>
            <div
              className={styles.stage_title}
              style={{ backgroundColor: passengers }}
            >
              <div className={styles.number}>2</div>
              <span className={styles.title}>Пассажиры</span>
            </div>
            <div
              style={{ backgroundColor: passengers }}
              className={styles.arrow}
            ></div>
          </button>
          <button style={{backgroundColor: confirm}} className={styles.stages_btn}>
            <div style={{backgroundColor: payments}} className={styles.stage_title}>
              <div className={styles.number}>3</div>
              <span className={styles.title}>Оплата</span>
            </div>
            <div style={{backgroundColor: payments}} className={styles.arrow}></div>
          </button>
          <button className={styles.stages_btn}>
            <div style={{backgroundColor: confirm}} className={styles.stage_title}>
            <div className={styles.number}>4</div>
            <span className={styles.title}>Проверка</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stages;
