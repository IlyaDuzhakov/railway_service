import { createContext } from "react";



const TrainContext = createContext([]);
const SelectTrainContext = createContext({})
const TicketContext = createContext({})
const ShowTrainsContext = createContext([])
const LoaderContext = createContext(false)
const MinMaxContext = createContext({min: 0, max: 1000});

export {TrainContext, TicketContext, ShowTrainsContext, LoaderContext, MinMaxContext, SelectTrainContext}