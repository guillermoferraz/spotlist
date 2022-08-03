import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdditionalService from "src/services/Addiotional";

export const getLyrics = createAsyncThunk('/lyrics', async (data : {artist: string, track: string}) => {
  try {
    const response = await AdditionalService.getLyrics(data);
    return response;
  } catch (err) {
    console.error(err)
  }
});

const AdditionalSlice = createSlice({
  name: 'Additional',
  initialState: {
    lyrics: {},
    additionalLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLyrics.fulfilled, (state, { payload }) => {
      state.lyrics = payload;
      state.additionalLoading = false;
    })
    .addCase(getLyrics.pending, (state) => {
      state.additionalLoading = true;
    })
  },
});
export default AdditionalSlice;