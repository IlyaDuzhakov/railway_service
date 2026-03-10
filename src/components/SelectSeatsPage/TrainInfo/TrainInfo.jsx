import styles from "./TrainInfo.module.css";
import {
  formatDate,
  travelTime,
  formatCity,
  getTrainsDate,
} from "../../../helpers/functions";

const TrainInfo = ({ train, show, showDate }) => {
  const colorDate = showDate ? "#ffffff" : "#000000";
  const colorCity = showDate ? "#ffffff" : "#292929";
  return (
    <>
      <div className={styles.train_item}>
        <div className={styles.train_item_from}>
          <p className={styles.departure_datetime} style={{ color: colorDate }}>
            {formatDate(train?.departure.from.datetime)}
          </p>
          {showDate ? (
            <p className={styles.departure_date}>
              {getTrainsDate(train?.departure.from.datetime)}
            </p>
          ) : (
            ""
          )}
          <p className={styles.landing_stations} style={{ color: colorCity }}>
            {formatCity(train?.departure.from.city.name)}
          </p>
          <p className={styles.station_name}>
            {train?.departure.from.railway_station_name} вокзал
          </p>
        </div>

        <div className={styles.train_item_arrow}>
          {show === true ? (
            <p className={styles.travel_time}>
              {travelTime(train?.departure.duration)}
            </p>
          ) : (
            ""
          )}
          <img
            className={styles.orange_arrow}
            src="/img/icons/arrow_right.svg"
            alt="arrow_right"
          />
        </div>

        <div>
          <p className={styles.departure_datetime} style={{ color: colorDate }}>
            {formatDate(train?.departure.to.datetime)}
          </p>
          {showDate ? (
            <p className={styles.departure_date}>
              {getTrainsDate(train?.departure.to.datetime)}
            </p>
          ) : (
            ""
          )}
          <p className={styles.landing_stations} style={{ color: colorCity }}>
            {formatCity(train?.departure.to.city.name)}
          </p>
          <p className={styles.station_name}>
            {train?.departure.to.railway_station_name} вокзал
          </p>
        </div>
      </div>
      <div className="sidebarDivider"></div>
    </>
  );
};

export default TrainInfo;
