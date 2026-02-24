import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import TrainsList from "../../components/SelectTrainPage/TrainsList/TrainsList";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./SelectTrain.module.css";
import { useContext, useState } from "react";
import { TrainContext, LoaderContext } from "../../helpers/context.js";
import OptionsBar from "../../components/SelectTrainPage/OptionsBar/OptionsBar.jsx";
import Loader from "../../components/SelectTrainPage/Loader/Loader.jsx";
import InstructionsText from "../../components/SelectTrainPage/TrainsList/InstructionsText.jsx";

const SelectTrain = () => {
  const [trains, setTrains] = useContext(TrainContext);
  const [isLoading] = useContext(LoaderContext);

  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <main className={styles.content}>
              {isLoading === false && trains.length === 0 ? (
                <InstructionsText />
              ) : isLoading === true ? (
                <Loader />
              ) : (
                <>
                  <OptionsBar />
                  <TrainsList />
                </>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTrain;
