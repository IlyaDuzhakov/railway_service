import styles from "./SeatsSelect.module.css";
import { formatCity } from "../../../helpers/functions.js";
import TrainInfo from "../TrainInfo/TrainInfo.jsx";
import { travelTimeLong } from "../../../helpers/functions.js";
import CountTicket from "../CountTicket/CountTicket.jsx";
import TypeCarriage from "../TypeCarriage/TypeCarriage.jsx";
import Seats from "../Seats/Seats.jsx";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../ui/CustomButton/CustomButton.jsx";
import { CountTicketContext } from "../../../helpers/context.js";

const SeatsSelect = ({ train }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [selectCarriage, setSelectCarriage] = useState(null);
  const [tickets] = useContext(CountTicketContext);
  const chooseCarriage = (type) => {
    setSelectCarriage(type);
    setActive(true);
  };

  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  const hasAtLeastOnePassenger = Object.values(tickets).some(
    (item) => Number(item.count || 0) > 0,
  );

  const canGoNext = selectCarriage !== null && hasAtLeastOnePassenger;

  return (
    <main>
      <p className={styles.choose_text}>Выбор мест</p>

      <div className={styles.content_seats}>
        <div className={styles.choose_train_wrapper}>
          <img
            className={styles.choose_train_arrow}
            src={process.env.PUBLIC_URL + "/img/icons/choose_train.svg"}
            alt="choose_train arrow"
          />
          <button className={styles.choose_train_btn}>
            <Link to="/select_train">Выбрать другой поезд</Link>
          </button>
        </div>
        <div className={styles.cap}>
          <img
            src={process.env.PUBLIC_URL + "/img/icons/train_icon.svg"}
            alt="train"
          />
          <div className={styles.train_number}>
            <p className={styles.train_text}>116С</p>
            <p>
              <span>{formatCity(train?.departure.from.city.name)}</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/img/icons/arrow_direction_black.svg"
                }
                alt=""
              />
            </p>

            <p>{formatCity(train?.departure.to.city.name)}</p>
          </div>
          <TrainInfo train={train} show={false} />
          <div className={styles.train_time}>
            <img
              className={styles.clock_travel}
              src={process.env.PUBLIC_URL + "/img/icons/clock_travel_time.svg"}
              alt="clock"
            />
            <div className={styles.train_time_text}>
              {travelTimeLong(train?.departure.duration).map((el) => {
                return <p>{el}</p>;
              })}
            </div>
          </div>
        </div>
        <CountTicket />
        <div className={styles.card_line}></div>
        <TypeCarriage
          selectCarriage={selectCarriage}
          chooseCarriage={chooseCarriage}
          train={train}
        />
        {selectCarriage !== null ? (
          <Seats train={train} selectCarriage={selectCarriage} />
        ) : (
          ""
        )}
      </div>
      <div className={styles.btn_next_wrapper}>
        <CustomButton
          // active={active}
          variant="secondary"
          className="btn_next"      
          disabled={!canGoNext}
          onClick={() => {
            if (selectCarriage === null) {
              showModal("Сначала выберите тип вагона");
              return;
            }

            if (!hasAtLeastOnePassenger) {
              showModal("Укажите хотя бы одного пассажира");
              return;
            }

            navigate("/passengers");
          }}
        >
          ДАЛЕЕ
        </CustomButton>
      </div>
    </main>
  );
};

export default SeatsSelect;
