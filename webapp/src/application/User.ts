import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "src/services/User";

export const getUser = createAsyncThunk('/user', async () => {
  try {
    const response = await UserService.getUser();
    console.log('store response:', response)
    return response;
  } catch (err) {
    console.error(err)
  }
});
const UserSlice = createSlice({
  name: 'User',
  initialState: {
    user: '',
    loading: false
  },
  reducers: {},
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