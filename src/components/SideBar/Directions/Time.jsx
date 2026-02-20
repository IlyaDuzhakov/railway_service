import Slider from "@mui/material/Slider";
import { useState } from "react";

const Time = ({ text }) => {
  const [time, setTime] = useState([0.0, 24.0]);
  const changeTime = (event, newValue) => {
    setTime(newValue);
  };

  const addClass =  text === "Время отбытия"
            ? "arrival_time departure_time"
            : "arrival_time"

  const marks = [
    {
      value: 0.0,
      label: "0:00",
    },
    {
      value: 11.0,
      label: "11.00",
    },
    {
      value: 24.0,
      label: "24.00",
    },
  ];

  return (
    <div className="time_band">
      <h3
        className={addClass}
      >
        {text}
      </h3>
      <div className="direction_text_bottom"></div>
      <Slider
        className="time"
        // aria-label="Always visible"
        defaultValue={10}
        // getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={0.0}
        middle={11.0}
        max={24.0}
        // valueLabelDisplay="on"
        valueLabelDisplay="auto"
        value={time}
        onChange={changeTime}
      />
    </div>
  );
};

export default Time;
