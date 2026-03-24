import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <h1 className={styles.found_trains}>ИДЕТ ПОИСК</h1>

      <div className={styles.loader_wrapper}>
        <img className={styles.train}
          src={process.env.PUBLIC_URL + "/img/icons/train_loading.svg"}
          alt=""
        />
        <div className={styles.loader_line}></div>
      </div>
    </>
  );
};

export default Loader;
