import styles from "./ChooseDirection.module.css";
import { useState, useEffect, useContext } from "react";
import Inputs from "./Inputs.jsx";
import {getCityId} from '../../../helpers/functions.js'
import { TrainContext, TicketContext } from "../../../helpers/context.js";
import { Link } from "react-router-dom";

const ChooseDirection = () => {
  const [trains, setTrains] = useContext(TrainContext)
  const [newTicket, setNewTicket] = useContext(TicketContext)
  const [listCitiesFrom, setListCitiesFrom] = useState([]);
  const [listCitiesTo, setListCitiesTo] = useState([]);
// https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78d&to_city_id=67ceb6548c75f00047c8f78e

  const findTrains = async () => {
 
    const cityFrom = await getCityId(newTicket.from)
    const cityTo = await getCityId(newTicket.to)
    let longLink = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}&date_start=${newTicket.dateStart}&date_end=${newTicket.dateEnd}`
    let shortLink = `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}`
    let url = newTicket.dateStart !== '' && newTicket.dateEnd !== '' ? longLink : shortLink
    
    fetch(url).then((response) =>
      response.json().then((data) => {
        setTrains(data.items);
        console.log(data.items)
      }),
    );
  };

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
    } catch (error) {
      console.log(error.message);
    }
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
        <Inputs
          listCitiesFrom={listCitiesFrom}
          listCitiesTo={listCitiesTo}
        />

        <button
          className={styles.submit_btn}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            findTrains();
          }}
        >
          <Link to='/select_train'>
          НАЙТИ БИЛЕТЫ
          </Link>
        </button>
      </div>
    </form>
  );
};

export default ChooseDirection;
