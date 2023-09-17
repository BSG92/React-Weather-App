import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {temperatureSlice} from "./features/temperatureSlice";
import { accentColorSlice } from "./features/accentColorSlice";
import { weatherSlice } from "./features/weatherSlice";

const reducer = combineReducers({
    temperatureUnit: temperatureSlice.reducer,
    accentColor: accentColorSlice.reducer,
    weather: weatherSlice.reducer
});

export const store = configureStore({reducer});