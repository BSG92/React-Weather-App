import { createSlice } from "@reduxjs/toolkit";
import { CurrentWeatherType } from "utils/types/CurrentWeatherType";

type RootState = {
    currentWeather: CurrentWeatherType
}

const initialState = {
    currentWeather: null
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        SET_CURRENT_WEATHER: (state, action) => {
            state.currentWeather = action.payload;
        }
    }
});

export const {SET_CURRENT_WEATHER} = weatherSlice.actions;
export const currentWeather = (state:{weather: RootState}) => state.weather.currentWeather;
export default weatherSlice.reducer;
