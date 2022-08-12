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
    layout: 'HOME',
    showSearch: false
  },
  reducers:{
    setTheme: (state, { payload }) => {
        state.dark = payload;
        if(state.dark) state.theme = themeDark;
        else state.theme = themeLight;
    },
    setShowSearch: (state, { payload }) => {
      state.showSearch = payload.value
    },
    setLayout: (state, { payload }) => {
      state.layout = payload.value
    },
    setLocale: (state, { payload }) => {
      state.t = payload === 'es' ? es : en;
    }
  },
})
export default SettingsSlice;