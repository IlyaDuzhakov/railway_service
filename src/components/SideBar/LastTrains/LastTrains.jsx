import { useEffect, useState } from "react";

const LastTrains = () => {
  const [lastTickets, setLastTickets] = useState([]);

  const getTrains = async () => {
    const response = await fetch(
      "https://students.netoservices.ru/fe-diplom/routes/last",
    );
    const data = await response.json();
    setLastTickets(data);
  };

  useEffect(()=> {
        getTrains()
  },[]) 

  return (
    <div>
        <h2>последние билеты</h2>
      {lastTickets.map((el)=> {
        return <div>
            <div className="top">
                <div className="right">
                    <p>{el.departure.from.city.name}</p>
                    <p>{el.departure.from.railway_station_name}<br />вокзал</p>
                </div>
                <div className="left">
                    <p>{el.departure.to.city.name}</p>
                    <p>{el.departure.to.railway_station_name}<br />вокзал</p>
                </div>
            </div>
        </div>
      })}
    </div>
  );
};

export default LastTrains;
