import Slider from "@mui/material/Slider";
import { useState } from "react";

const Time = ({ text }) => {
  const [time, setTime] = useState([0.0, 24.0]);
  const changeTime = (event, newValue) => {
    setTime(newValue);
  };

  const addClass =
    text === "Время отбытия" ? "arrival_time departure_time" : "arrival_time";

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
      <h3 className={addClass}>{text}</h3>
      <div className="direction_text_bottom"></div>
      <Slider
        sx={{
          "& .MuiSlider-rail ": {
            backgroundColor: "#3E3C41",
            border: "1px solid #C4C4C4",
            height: "19px",
            borderRadius: "8px",
            opacity: "1",
          },
          "& .MuiSlider-markLabel": {
            fontWeight: "400",
            fontSize: "16px",
            color: "#E5E5E5",
          },
          "& .MuiSlider-track ": {
            backgroundColor: "#FFA800",
            height: "19px",
            border: "3px solid #FFA800"
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "#ffffff",
            width: "24px",
            height: "24px",
          }
        }}
        className="time"
        defaultValue={10}
        step={1}
        marks={marks}
        min={0.0}
        middle={11.0}
        max={24.0}
        valueLabelDisplay="auto"
        value={time}
        onChange={changeTime}
      />
    </div>
  );
};

export default Time;
