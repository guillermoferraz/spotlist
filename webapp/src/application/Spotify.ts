import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpofityService from "src/services/Spotify";

export const getLoginData = createAsyncThunk('/auth/spotLogin', async (code:{ [key: string]: string | undefined }) => {
  try {
    const response = await SpofityService.login(code);
    return response.data;
  } catch (err: any) {
    console.error(err)
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
    loginResponse: { accessToken: undefined, expiresIn: 0, refreshToken: undefined },
    accessToken: "",
    expiresIn: 0,
    refreshToken: undefined,
    refreshResponse: {},
    spotifyEnabled: false,
    loading: false,
    saveRefreshToken: '',
    searchResponse: { tracks: { items: [] } },
    selectedData: { uri: undefined }
  },
  reducers: {
    setSpotifyEnabled: (state, { payload }) => {
        state.spotifyEnabled = payload.value
    },
    getRefresh: (state) => {
      state.saveRefreshToken = typeof window !== 'undefined' && localStorage.getItem("refTkn") || ""
    },
    setSelectedData: (state, { payload }) => {
      state.selectedData = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLoginData.fulfilled, (state, { payload }) => {
        if (typeof window !== 'undefined' && payload?.expiresIn > 0 && payload?.accessToken && payload?.refreshToken){
            localStorage.setItem('accDt',JSON.stringify({exp: payload.expiresIn, at: payload.accessToken, rt: payload.refreshToken}))
        }
        const existentData = () => {
          const storageData: any = typeof window !== 'undefined' && localStorage.getItem('accDt')
          const savedData = storageData && JSON.parse(storageData)
          if(savedData){
            return {
              exp: savedData.exp,
              at :savedData.at,
              rt: savedData.rt
            }
          } else {
            return {
              exp: 0,
              at: undefined,
              rt: undefined
            }
          }
        }
        state.loginResponse = payload;
        state.expiresIn = payload ? payload.expiresIn > 0 && payload.expiresIn : existentData().exp;
        state.accessToken = payload ? payload.accessToken : existentData().at;
        state.refreshToken = payload ?  payload.refreshToken : existentData().rt;
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