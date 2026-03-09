import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const CountTicketContext = createContext({
  adult: { count: 0, koef: 1 },
  children: { count: 0, koef: 0.5 },
  child_no_seat: { count: 0, koef: 0 },
});
const TrainContext = createContext([]);
const SelectTrainContext = createContext({});
const TicketContext = createContext({});
const ShowTrainsContext = createContext([]);
const LoaderContext = createContext(false);
const MinMaxContext = createContext({ min: 0, max: 1000 });
const PassengersContext = createContext({
  id: uuidv4(),
  type: "adult",
  name: "",
  secondName: "",
  surname: "",
  date: "",
  gender: "M",
  checkbox: false,
  document_type: "passport",
  document_series: "",
  document_number: "",
});

const OrderContext = createContext({
  name: "",
  surname: "",
  secondName: "",
  phone: "",
  email: "",
  payment_method: "",
});

export {
  TrainContext,
  TicketContext,
  ShowTrainsContext,
  LoaderContext,
  MinMaxContext,
  SelectTrainContext,
  CountTicketContext,
  PassengersContext,
  OrderContext,
};
