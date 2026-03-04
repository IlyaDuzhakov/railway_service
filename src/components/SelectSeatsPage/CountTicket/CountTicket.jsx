import { useState } from 'react';
import styles from '../SeatsSelect/SeatsSelect.module.css'
import PassengersCard from './PassengersCard';

const CountTicket = () => {
  const categories = [
    {title: 'Взрослых - ', text: 'Можно добавить еще 3 пассажиров', id: 'adult'},
    {title: 'Детских - ', text: 'Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%', id: 'children'},
    {title: 'Детских «без места» —  ', text: '', id: 'child_no_seat'}
  ]

  // const [tickets, setTickets] = useState({adult: 0, children: 0, child_no_seat: 0})
  return (
    <>
      <p className={styles.number_tickets}>Количество билетов</p>
      <div className={styles.passengers_row}>
        {categories.map((el)=> {
            return <PassengersCard key={el.title} el={el}/>
        })}
        
      </div>
    </>
  );
};

export default CountTicket;
