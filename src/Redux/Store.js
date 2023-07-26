import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./CounterSlice";

export let storeConfig = configureStore({
    reducer:{
       counter:CounterReducer
    }
})