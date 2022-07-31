import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpofityService from "src/services/Spotify";

export const getLoginData = createAsyncThunk('/auth/spotLogin', async (code:{ [key: string]: string }) => {
  try {
    const response = await SpofityService.login(code);
    return response.data;
  } catch (err) {
    console.error(err)
    // window.location.replace('/signin')
  }
});
export const refreshToken = createAsyncThunk('/auth/refresh', async (refreshToken: { [key: string]: string }) => {
    try {
        const response = await SpofityService.refresh(refreshToken);
        return response.data;
    } catch (err) {
        console.error(err)
        window.location.replace("/signin")
    }
})

const SpotifySlice = createSlice({
  name: 'Spotify',
  initialState: {
    loginResponse: {},
    accessToken: "",
    expiresIn: 0,
    refreshToken: "",
    refreshResponse: {},
    spotifyEnabled: false
  },
  reducers: {
    setSpotifyEnabled: (state, { payload }) => {
        state.spotifyEnabled = payload.value
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginData.fulfilled, (state, { payload }) => {
        state.loginResponse = payload;
        state.expiresIn = payload ? payload.expiresIn : 0;
        state.accessToken = payload ? payload.accessToken : '';
        state.refreshToken = payload ?  payload.refreshToken : '';
    })
    .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.refreshResponse = payload
    })
  }
});
export default SpotifySlice;