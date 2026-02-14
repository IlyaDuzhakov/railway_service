import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import TrainsList from "../../components/SelectTrainPage/TrainsList/TrainsList";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./SelectTrain.module.css";
import {useState} from 'react'





const SelectTrain = () => {

  
  

  return (
    <div>
      <HeaderSelectTrain/>
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <main>
              <div className={styles.button_choose}>Кнопки выбора</div>
              <TrainsList/>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTrain;

