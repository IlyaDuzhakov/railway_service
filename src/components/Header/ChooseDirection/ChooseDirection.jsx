import styles from "./ChooseDirection.module.css";
import { useState, useEffect } from "react";
import Inputs from "./Inputs.jsx";
import {getCityId} from '../../../helpers/functions.js'

const ChooseDirection = ({setTrains}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  // const [listCities, setListCities] = useState([]);
  const [listCitiesFrom, setListCitiesFrom] = useState([]);
  const [listCitiesTo, setListCitiesTo] = useState([]);
// https://students.netoservices.ru/fe-diplom/routes?from_city_id=67ceb6548c75f00047c8f78d&to_city_id=67ceb6548c75f00047c8f78e

  const findTrains = async () => {
  console.log(from, to)
    const cityFrom = await getCityId(from)
    const cityTo = await getCityId(to)
    
    
    fetch(
      `https://students.netoservices.ru/fe-diplom/routes?from_city_id=${cityFrom}&to_city_id=${cityTo}`,
    ).then((response) =>
      response.json().then((data) => {
        setTrains(data.items);
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
    findCities(from, "from");
  }, [from]);

  useEffect(() => {
    findCities(to, "to");
  }, [to]);

  return (
    <form className={styles.search_form}>
      <div className={styles.form_container}>
        <Inputs
          from={from}
          setFrom={setFrom}
          listCitiesFrom={listCitiesFrom}
          listCitiesTo={listCitiesTo}
          // listCities={listCities}
          to={to}
          setTo={setTo}
          // setListCities={setListCities}
        />

        <button
          className={styles.submit_btn}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            findTrains();
          }}
        >
          НАЙТИ БИЛЕТЫ
        </button>
      </div>
    </form>
  );
};

export default ChooseDirection;
