import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import AuthSlice from "src/application/Auth";
import SettingsSlice from "src/application/Settings";
import UserSlice from "src/application/User";
import SpotifySlice from "src/application/Spotify";
import AdditionalSlice from "src/application/Additional";
import ListsSlice from "src/application/Lists";
const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Settings: SettingsSlice.reducer,
    User: UserSlice.reducer,
    Spotify: SpotifySlice.reducer,
    Additional: AdditionalSlice.reducer,
    Lists: ListsSlice.reducer
  },
})
export default store;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();