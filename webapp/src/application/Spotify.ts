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
});

export const getCurrentPlayback = createAsyncThunk('/getCurrentPlayback', async (data: { accessToken: string } ) => {
  try {
    const response = await SpofityService.getCurrentPlayback(data);
    return response;
  } catch (err) {
    console.error(err)
  }
});

export const getAlbumByArtist = createAsyncThunk('getAlbumByArtist', async (data: { accessToken: string, id: string }) => {
  try{
    const response = await SpofityService.getAlbumByArtist(data);
    return response;
  } catch (err) {
    console.error(err)
  }
});

export const getAlbum = createAsyncThunk('getAlbum', async (data: { accessToken: string, id: string }) => {
  try {
    const response = await SpofityService.getAlbum(data);
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
    selectedData: { uri: undefined, artists: [ {id: undefined} ] },
    currentPlayback: {},
    playbackLoaded: false,
    albumByArtist: {items: undefined},
    album: {
      artists: undefined,
      images: [
        {url: undefined}
      ], 
      tracks: 
      { 
        items: 
        [
          { name: undefined,
            id: undefined, 
            duration_ms: undefined, 
            track_number: undefined 
          }
        ] 
      } 
    }
  },
  reducers: {
    setSpotifyEnabled: (state, { payload }) => {
        state.spotifyEnabled = payload.value
    },
    getRefresh: (state) => {
      state.saveRefreshToken = typeof window !== 'undefined' && localStorage.getItem("refTkn") || ""
    },
    setSelectedData: (state, { payload }) => {
      state.selectedData = payload.item
      state.playbackLoaded = true
    },
    setPlaybackLoaded: (state, { payload }) => {
      state.playbackLoaded = payload.value
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
    .addCase(getCurrentPlayback.fulfilled, (state, { payload }) => {
      state.currentPlayback = payload;
      state.loading = false;
      state.playbackLoaded = false
    })
    .addCase(getCurrentPlayback.pending, (state, { payload }) => {      
      // state.loading = true;
    })
    .addCase(getAlbumByArtist.fulfilled, (state, { payload }) => {
      state.albumByArtist = payload;
    })
    .addCase(getAlbum.fulfilled, (state, { payload }) => {
      state.album = payload
    })
  }
});
export default SpotifySlice;