import { useState, useEffect } from "react";
import styles from "./TrainsList.module.css";
import { formatDate, travelTime } from "../../../helpers/functions";


const TrainsList = () => {

    const seetsList = {first: 'Люкс', second: 'Купе', third: 'Плацкарт', fourth: 'Сидячий'}

  const [trains, setTrains] = useState([]);

  const msc = "67ceb6548c75f00047c8f78d";
  const chumikha = "67ceb6548c75f00047c8f820";
  const spb = "67ceb6548c75f00047c8f78e";

  const getTrains = () => {
    fetch(
      `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${msc}&to_city_id=${spb}`,
    ).then((response) =>
      response.json().then((data) => {
        setTrains(data.items);
      }),
    );
  };

  useEffect(() => {
    getTrains();
  }, []);

  return (
    <div>
      {trains.map((el, index) => {
        return (
          <div className={styles.train} key={index}>
            <div className={styles.train_direction}>
              <img src="/img/icons/train.svg" alt="train" />
              <p className={styles.train_number}>116С</p>
              <div className={styles.directions}>
                <div className={styles.from}>
                  <p>{el.departure.from.city.name}</p>
                  <img
                    src="/img/icons/arrow_direction_black.svg"
                    alt="arrow_black"
                  />
                </div>
                <div className={styles.to}>
                  <p>{el.departure.to.city.name}</p>
                </div>
              </div>
            </div>
              <div className={styles.train_info}>
                <div className={styles.train_info_left}>
                  <div className={styles.train_item}>
                    <div className={styles.train_item_from}>
                      <p>{formatDate(el.departure.from.datetime)}</p>
                      <p>{el.departure.from.city.name}</p>
                      <p>{el.departure.from.railway_station_name} вокзал</p>
                    </div>
                    <div className={styles.train_item_arrow}>
                        <p>{travelTime(el.departure.duration)}</p>
                        <img src="/img/icons/arrow_right.svg" alt="arrow_right" />
                    </div>
                    <div className={styles.train_item_to}>
                        <p>{formatDate(el.departure.to.datetime)}</p>
                      <p>{el.departure.to.city.name}</p>
                      <p>{el.departure.to.railway_station_name} вокзал</p>
                    </div>
                  </div>
                </div>
                <div className={styles.train_info_right}>
                    {Object.keys(el.available_seats_info)}
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainsList;
