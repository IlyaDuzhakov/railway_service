
import styles from "./ChooseDirection.module.css";
import { useState, useEffect } from "react";
import Inputs from './Inputs.jsx'

const ChooseDirection = () => {
  const [from, setFrom] = useState("");
  const [listCities, setListCities] = useState([]);

  const findTrains = () => {

    fetch( 'https://students.netoservices.ru/fe-diplom/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa8f83e028786ea567b' )
    .then( response => response.json()
        .then( data => { console.log( 'routes',  data ) })
    );
  }

  const findCities = async (event) => {
    try {
      if (from != "") {
        const responce = await fetch(
          `https://students.netoservices.ru/fe-diplom/routes/cities?name=${from}`,
        );

        const data = await responce.json();

        setListCities(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    findCities();
  }, [from]);

  return (
    <form className={styles.search_form}>
      <div className={styles.form_container}>
       <Inputs from={from} setFrom={setFrom} listCities={listCities} />

        <button className={styles.submit_btn} type="submit" onClick={(e)=> {
          e.preventDefault()
          findTrains()
        }}>
          НАЙТИ БИЛЕТЫ
        </button>
      </div>
    </form>
  );
};

export default ChooseDirection;
