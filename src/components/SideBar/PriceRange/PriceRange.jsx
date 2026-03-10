import Slider from "@mui/material/Slider";
import "./PriceRange.css";
import { useContext, useState, useEffect,  } from "react";
import { MinMaxContext, TrainContext, ShowTrainsContext } from "../../../helpers/context";
import { filterPrice } from "../../../helpers/functions";

const PriceRange = () => {
  const range = useContext(MinMaxContext);
  const [trains, setTrains] = useContext(TrainContext);
  const [price, setPrice] = useState([range.min, range.max]);
  const [showTrains, setshowTrains] = useContext(ShowTrainsContext)
  const changePrice = (event, newValue) => {
    setPrice(newValue);
    const rezult = filterPrice(trains, price[0], price[1])
    setshowTrains(rezult)
  };
  const middle = (range.min + range.max) / 2 || 0;
  const marks = [
    {
      value: range.min,
      label: `${range.min}`,
    },
    {
      value: middle,
      label: `${middle}`,
    },
    {
      value: range.max,
      label: `${range.max}`,
    },
  ];

  useEffect(()=> {
      setPrice([range.min, range.max])
  }, [range])

  return (
    <div className="price_range">
      <h3 className="price_text">Стоимость</h3>
      <div className="direction_text">
        <span className="from">от</span>
        <span className="to">до</span>
      </div>
      <Slider
        className="price"
        step={10}
        marks={marks}
        min={range.min}
        middle={middle}
        max={range.max}
        valueLabelDisplay="auto"
        value={price}
        onChange={changePrice}
      />
    </div>
  );
};

export default PriceRange;
