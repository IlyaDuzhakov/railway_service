import styles from "./Stages.module.css";

const Stages = () => {
  return (
    <div className={styles.stages}>
      <div className="container">
        <div className={styles.stages_btns}>
          <button className={styles.stages_btn}>
            <div className={styles.number}>1</div>
            <span className={styles.title}>Билеты</span>
            <div className={styles.arrow}></div>
            
          </button>
          <button className={styles.stages_btn}>

            <div className={styles.number}>2</div>
            <span className={styles.title}>Пассажиры</span>
            <div className={styles.arrow}></div>
          </button>
          <button className={styles.stages_btn}>

            <div className={styles.number}>3</div>
            <span className={styles.title}>Оплата</span>
            <div className={styles.arrow}></div>
          </button>
          <button className={styles.stages_btn}>

            <div className={styles.number}>4</div>
            <span className={styles.title}>Проверка</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stages;
