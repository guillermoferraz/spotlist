import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AuthSlice from "../application/Auth";
import SettingsSlice from "../application/Settings";

const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Settings: SettingsSlice.reducer
  },
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();