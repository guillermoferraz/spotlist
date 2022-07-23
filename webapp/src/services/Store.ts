import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AuthSlice from "../application/Auth";
import ThemeSlice from "../application/Theme";

const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Theme: ThemeSlice.reducer
  },
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();