import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import TrainsList from "../../components/SelectTrainPage/TrainsList/TrainsList";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./SelectTrain.module.css";
import { useContext } from "react";
import { TrainContext } from "../../helpers/context.js";

const SelectTrain = () => {
  const [trains, setTrains] = useContext(TrainContext);

  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <main className={styles.content}>
              {trains.length !== 0 ? (
                <>
                  <div className={styles.button_choose}>Кнопки выбора</div>
                  <TrainsList />
                </>
              ) : (
                <div className={styles.ticket_wrapper}>
                  <div className={styles.ticket}>
                    <h2 className={styles.ticket_text}>
                      Выберите города и даты и нажмите на кнопку "найти билеты"
                    </h2>
                    <img
                      className={styles.ticket_icon}
                      src="/img/icons/train_ticket.svg"
                      alt="ticket"
                    />
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTrain;
