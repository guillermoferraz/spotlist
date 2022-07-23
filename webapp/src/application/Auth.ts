import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/Auth";
import { SigninTypes } from "../components/schemas/Auth.Schema";

export const Signin = createAsyncThunk("account/signin", async (data: SigninTypes) => {
  try {
    const response = await AuthService.Sigin(data);
    return response
  } catch (err) {
    console.error(err)
  }
});

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    signinResponse: {email: '', password: ''},
    loading: false
  },
  reducers:{},
  extraReducers: builder => {
    builder.addCase(Signin.fulfilled, (state, { payload }) => {
      state.signinResponse = payload || state.signinResponse;
      state.loading = false;
    })
    .addCase(Signin.pending, (state) => {
      state.loading = true;
    })
  }
})
export default AuthSlice;