import { createSlice } from "@reduxjs/toolkit";

export const List_ColorAccent = ['rose','sky','green','teal','orange','yellow','violet','indigo'];

type RootState = {
    accent: string
}

const initialState = {
    accent: localStorage.getItem("accentColor") || 'rose'
}

export const accentColorSlice = createSlice({
    name: "accent",
    initialState,
    reducers: {
        SET_ACCENT_COLOR: (state, action) => {
            state.accent = action.payload;
            localStorage.setItem("accentColor", action.payload);
        }
    }
});

export const {SET_ACCENT_COLOR} = accentColorSlice.actions;
export const accent = (state:{accentColor: RootState}) => state.accentColor.accent;
export default accentColorSlice.reducer;

/* 
    state.accentColor.accent should match what is in the reducer in store.ts
    const reducer = combineReducers({
        accentColor: accentColorSlice.reducer
    });
*/
