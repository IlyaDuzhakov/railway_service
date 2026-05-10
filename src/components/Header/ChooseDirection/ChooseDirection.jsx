import styles from "./ChooseDirection.module.css";
import { useState, useEffect, useContext } from "react";
// useState - этот хук позволяет изменять значение переменной и делать так, чтобы react при необходимости повторно отрисовывал компонент
// хуки - это специальные функции react, которые позволяют работать с состоянием и методами жизненного цикла компонента
// useEffect - это хук который позволяет контролировать количество вызовов какой-то функции 
// useEffect - 1 параметром принимает callback функцию (то что мы будем делать) а 2 параметром принимает массив зависимостей
import Inputs from "./Inputs.jsx";
import { getCityId } from "../../../helpers/functions.js";
import {
  TrainContext,
  TicketContext,
  LoaderContext,
} from "../../../helpers/context.js";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../ui/CustomButton/CustomButton.jsx";
import Popup from "../../ui/Popup/Popup.jsx";

// react-router-dom нужен для того, чтобы мы могли переходить между страницами без ее обновления страницы
// ui - user interface
const ChooseDirection = () => {
  const navigate = useNavigate();
  const [trains, setTrains] = useContext(TrainContext);
  const [newTicket] = useContext(TicketContext);
  const [listCitiesFrom, setListCitiesFrom] = useState([]);
  const [listCitiesTo, setListCitiesTo] = useState([]);
  const [isLoading, showLoader, hideLoader] = useContext(LoaderContext);

  const findTrains = async () => {
    showLoader();
    try {
      const cityFrom = await getCityId(newTicket.from);
      const cityTo = await getCityId(newTicket.to);
      let longLink = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}&date_start=${newTicket.dateStart}&date_end=${newTicket.dateEnd}`;
      // let shortLink = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}`;
      let url = longLink
        

      const response = await fetch(url);
      const data = await response.json();

      setTrains(data.items);
    } catch (error) {
    } finally {
      hideLoader();
    }
  };

  const [popupType, setPopupType] = useState(null);

  const findCities = async (direction, str) => {
    try {
      if (direction !== "") {
        const responce = await fetch(
          `https://students.netoservices.ru/fe-diplom/routes/cities?name=${direction}`,
        );

        const data = await responce.json();

        if (str === "from") {
          setListCitiesFrom(data);
        } else if (str === "to") {
          setListCitiesTo(data);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    findCities(newTicket.from, "from");
  }, [newTicket.from]);

  useEffect(() => {
    findCities(newTicket.to, "to");
  }, [newTicket.to]);

  return (
    <form className={styles.search_form}>
      <div className={styles.form_container}>
        <Inputs listCitiesFrom={listCitiesFrom} listCitiesTo={listCitiesTo} />

        <CustomButton
          variant="primary"
          type="submit"
          className="submit_btn"
          onClick={async (e) => {
            e.preventDefault();
            if (newTicket.to !== "" && newTicket.from !== "" && newTicket.dateStart !== "" && newTicket.dateEnd !== "") {
              await findTrains();
              navigate("/select_train");
            } else {
              setPopupType("direction");
            }
          }}
        >
          НАЙТИ БИЛЕТЫ
        </CustomButton>
        <Popup
          type="error"
          title="Ошибка"
          message={popupType === "direction" ? "Выберите направление" : ""}
          isOpen={popupType !== null}
          onClose={() => setPopupType(null)}
        />
      </div>
    </form>
  );
};

export default ChooseDirection;
