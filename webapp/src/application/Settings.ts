import { createSlice } from "@reduxjs/toolkit";
import themeDark from "src/Assets/Themes/Theme.dark";
import themeLight from "src/Assets/Themes/Theme.light";
import es from 'src/Assets/Locales/es';
import en from 'src/Assets/Locales/en';


const SettingsSlice = createSlice({
  name: "Settings",
  initialState: {
    dark: true,
    theme: themeDark,
    t: en,
  },
  reducers:{
    setTheme: (state, { payload }) => {
        state.dark = payload;
        if(state.dark) state.theme = themeDark;
        else state.theme = themeLight;
    },
    setLocale: (state, { payload }) => {
      state.t = payload === 'es' ? es : en;
    }
  },
})
export default SettingsSlice;