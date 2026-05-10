import styles from "./TrainInfo.module.css";
import {
  formatDate,
  travelTime,
  formatCity,
  getTrainsDate,
} from "../../../helpers/functions";
import { TicketContext } from "../../../helpers/context.js";
import { useContext } from "react";

const TrainInfo = ({ train, show, showDate, direction, variant }) => {
  const [newTicket, setNewTicket] = useContext(TicketContext);
  const colorDate = showDate ? "#ffffff" : "#000000";
  const colorCity = showDate ? "#ffffff" : "#292929";
  return (
    <>
      <div
        className={`${styles.train_item} ${
          variant === "sidebar"
            ? styles.sidebar_train_item
            : styles.list_train_item
        }`}
      >
        <div className={styles.train_item_from}>
          <p className={styles.departure_datetime} style={{ color: colorDate }}>
            {formatDate(train?.departure.from.datetime)}
          </p>
          {showDate ? (
            <p className={styles.departure_date}>
              {direction === "Туда"
                ? getTrainsDate(newTicket.dateStart)
                : getTrainsDate(newTicket.dateEnd)}
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
            src={process.env.PUBLIC_URL + "/img/icons/arrow_right.svg"}
            alt="arrow_right"
          />
        </div>

        <div
          className={`${styles.departure_left} ${
            variant === "sidebar"
              ? styles.sidebar_departure_left
              : styles.list_departure_left
          }`}
        >
          <p className={styles.departure_datetime} style={{ color: colorDate }}>
            {formatDate(train?.departure.to.datetime)}
          </p>
          {showDate ? (
            <p className={styles.departure_date}>
              {direction === "Туда"
                ? getTrainsDate(newTicket.dateStart)
                : getTrainsDate(newTicket.dateEnd)}
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
