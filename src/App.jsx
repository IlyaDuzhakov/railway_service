import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import ConfirmOrder from "./pages/ConfirmOrder/ConfirmOrder";
import Passengers from "./pages/Passengers/Passengers";
import Payment from "./pages/Payment/Payment";
import SelectSeats from "./pages/SelectSeats/SelectSeats.jsx";
import SelectTrain from "./pages/SelectTrain/SelectTrain";
import SuccessfulOrder from "./pages/SuccessfulOrder/SuccessfulOrder";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect, useState } from "react";
import {
  TrainContext,
  TicketContext,
  ShowTrainsContext,
} from "./helpers/context.js";

function App() {
  const [trains, setTrains] = useState([]);
  const [showTrains, setshowTrains] = useState(trains);
  const [newTicket, setNewTicket] = useState({
    from: "",
    to: "",
    dateStart: "",
    dateEnd: "",
  });

  useEffect(()=> {
    setshowTrains(trains)
  }, [trains])
  
  return (
    <div className="App">
      <ShowTrainsContext.Provider value={[showTrains, setshowTrains]}>
        <TicketContext.Provider value={[newTicket, setNewTicket]}>
          <TrainContext.Provider value={[trains, setTrains]}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/confirm_order" element={<ConfirmOrder />} />
              <Route path="/passengers" element={<Passengers />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/select_seats" element={<SelectSeats />} />
              <Route path="/select_train" element={<SelectTrain />} />
              <Route path="/successful_order" element={<SuccessfulOrder />} />
            </Routes>
          </TrainContext.Provider>
        </TicketContext.Provider>
      </ShowTrainsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
