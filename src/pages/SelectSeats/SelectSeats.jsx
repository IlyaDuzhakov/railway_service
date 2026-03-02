import styles from "../SelectTrain/SelectTrain.module.css";
import HeaderSelectTrain from "../../components/Header/HeaderSelectTrain/HeaderSelectTrain";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router-dom";
import { TrainContext, SelectTrainContext } from "../../helpers/context.js";
import { useContext, useEffect, useState } from "react";
import { getTrain } from "../../helpers/functions.js";
import SeatsSelect from "../../components/SelectSeatsPage/SeatsSelect/SeatsSelect.jsx";

const SelectSeats = () => {
  const { trainId } = useParams();
  const [trains, setTrains] = useContext(TrainContext);
  const [train, setTrain] = useContext(SelectTrainContext)
  // сделать так, чтобы в train мы записывали значение из localstorage (если оно есть), а если его нет, вызывали функцию getTrain()

  useEffect(() => {
    localStorage.setItem("train", JSON.stringify(train));
  }, [train]);

  useEffect(()=> {
    setTrain(getTrain(trains, trainId))
  }, [])

  return (
    <div>
      <HeaderSelectTrain />
      <div className={styles.main}>
        <div className="container">
          <div className={styles.main_wrapper}>
            <SideBar />
            <SeatsSelect train={train} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeats;
