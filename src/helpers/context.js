import { createContext } from "react";

const CountTicketContext = createContext({
  adult: {count: 0, koef: 1},
  children: {count: 0, koef: 0.5},
  child_no_seat: {count: 0, koef: 0},
});
const TrainContext = createContext([]);
const SelectTrainContext = createContext({});
const TicketContext = createContext({});
const ShowTrainsContext = createContext([]);
const LoaderContext = createContext(false);
const MinMaxContext = createContext({ min: 0, max: 1000 });

export {
  TrainContext,
  TicketContext,
  ShowTrainsContext,
  LoaderContext,
  MinMaxContext,
  SelectTrainContext,
  CountTicketContext,
};
