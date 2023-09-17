import { createSlice } from "@reduxjs/toolkit";

/*
	c = celcius
	f = fahrenheit
*/
export enum TemperatureTypes {
	"c" = "c",
	"f" = "f",
}

type RootState = {
    unit: TemperatureTypes
}

const initialState = {
    unit: localStorage.getItem("temperatureUnit") || TemperatureTypes.c
}

export const temperatureSlice = createSlice({
    name: "unit",
    initialState,
    reducers: {
        SET_TEMPERATURE_UNIT: (state, action) => {
            state.unit = action.payload;
            localStorage.setItem("temperatureUnit", action.payload);
        }
    }
});

export const {SET_TEMPERATURE_UNIT} = temperatureSlice.actions;
export const unit = (state:{temperatureUnit: RootState}) => state.temperatureUnit.unit;
export default temperatureSlice.reducer;