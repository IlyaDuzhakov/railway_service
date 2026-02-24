import styles from '../SelectTrain/SelectTrain.module.css'
import HeaderSelectTrain from '../../components/Header/HeaderSelectTrain/HeaderSelectTrain'
import SideBar from '../../components/SideBar/SideBar';


const SelectSeats = () => {
  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <main className={styles.content}>
              <div>
                <p className={styles.choose_text}>Выбор мест</p>
              </div>
              <div>
                <div>
                  <img className={styles.choose_train_arrow} src="/img/icons/choose_train.svg" alt="choose_train arrow" />
                  <button className={styles.choose_train_btn}>
                    <span className={styles.btn_text}>Выбрать другой поезд</span>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectSeats