import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "src/services/User";

export const getUser = createAsyncThunk('/user', async () => {
  try {
    const response = await UserService.getUser();
    return response;
  } catch (err) {
    console.error(err)
  }
});

const UserSlice = createSlice({
  name: 'User',
  initialState: {
    user: { id: '', email: '', access: '' },
    loading: false,
    code: {}
  },
  reducers: {
    setSpotCode: (state) => {
      const spotCode: any = typeof window !== 'undefined' ?  new URLSearchParams(window.location.search).get("code") : ''
      state.code = spotCode 
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.loading = false;
    })
    .addCase(getUser.pending, (state) => {
      state.loading = true;
    })
  },
});
export default UserSlice;