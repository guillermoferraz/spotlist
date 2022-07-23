import { createSlice } from "@reduxjs/toolkit";
import themeDark from "../Assets/Themes/Theme.dark";
import themeLight from "../Assets/Themes/Theme.light";
import es from '../Assets/Locales/es';
import en from '../Assets/Locales/en';


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