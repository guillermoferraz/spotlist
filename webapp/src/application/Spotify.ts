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
export const getRefreshToken = createAsyncThunk('/auth/refresh', async (refreshToken: { [key: string]: string }) => {
    try {
        const response = await SpofityService.refresh(refreshToken);
        return response.data;
    } catch (err) {
        console.error(err)
    }
});
export const searchTracks: any = createAsyncThunk('/searchTracks', async (data: { search: string, accessToken: string }) => {
  try {
    const response = await SpofityService.searchTracks(data);
    return response;
  } catch (err) {
    console.error(err)
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
    spotifyEnabled: false,
    loading: false,
    saveRefreshToken: '',
    searchResponse: { tracks: { items: [] } }
  },
  reducers: {
    setSpotifyEnabled: (state, { payload }) => {
        state.spotifyEnabled = payload.value
    },
    getRefresh: (state) => {
      state.saveRefreshToken = typeof window !== 'undefined' && localStorage.getItem("refTkn") || ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginData.fulfilled, (state, { payload }) => {
        state.loginResponse = payload;
        state.expiresIn = payload ? payload.expiresIn : 0;
        state.accessToken = payload ? payload.accessToken : '';
        state.refreshToken = payload ?  payload.refreshToken : '';
        state.loading = false
        payload?.refreshToken && localStorage.setItem('refTkn', payload.refreshToken)
    })
    .addCase(getLoginData.pending, (state) => {
      state.loading = true
    })
    .addCase(getRefreshToken.fulfilled, (state, { payload }) => {
        state.refreshResponse = payload;
        state.loading = false
    })
    .addCase(getRefreshToken.pending, (state) => {
      state.loading = true
    })
    .addCase(searchTracks.fulfilled, (state, { payload }) => {
      state.searchResponse = payload;
      state.loading = false;
    })
    .addCase(searchTracks.pending, (state, { payload }) => {
      state.loading = true;
    })
  }
});
export default SpotifySlice;