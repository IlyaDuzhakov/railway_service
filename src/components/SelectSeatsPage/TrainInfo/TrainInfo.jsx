import React from "react";

const TrainInfo = () => {
  return (
    <div className={styles.train_item}>
      <div className={styles.train_item_from}>
        <p className={styles.departure_datetime}>
          {formatDate(train?.departure.from.datetime)}
        </p>
        <p className={styles.landing_stations}>
          {train?.departure.from.city.name}
        </p>
        <p className={styles.station_name}>
          {train?.departure.from.railway_station_name} вокзал
        </p>
      </div>
      <div className={styles.train_item_arrow}>
        <p className={styles.travel_time}>
          {travelTime(train?.departure.duration)}
        </p>
        <img
          className={styles.orange_arrow}
          src="/img/icons/arrow_right.svg"
          alt="arrow_right"
        />
      </div>
      <div>
        <p className={styles.departure_datetime}>
          {formatDate(train?.departure.to.datetime)}
        </p>
        <p className={styles.landing_stations}>
          {train?.departure.to.city.name}
        </p>
        <p className={styles.station_name}>
          {train?.departure.to.railway_station_name} вокзал
        </p>
      </div>
    </div>
  );
};

export default TrainInfo;
