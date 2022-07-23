import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: {
    dark: true
  },
  reducers:{
    setTheme: (state, { payload }) => {
        state.dark = payload
    }
  },
})
export default ThemeSlice;