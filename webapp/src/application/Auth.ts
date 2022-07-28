import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "src/services/Auth";
import { SigninTypes } from "src/components/schemas/Auth.Schema";

export const Signin = createAsyncThunk("auth/signin", async (data: SigninTypes) => {
  try {
    const response = await AuthService.Sigin(data);
    return response
  } catch (err) {
    console.error(err)
  }
});
export const Signup = createAsyncThunk("auth/signup", async (data: SigninTypes) => {
  try {
    const response = await AuthService.Signup(data);
    return response
  } catch (err: any) {
    return { message: err?.response?.data?.detail }
  }
})

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    signinResponse: {email: '', password: ''},
    signupResponse: { message: '' },
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
    .addCase(Signup.fulfilled, (state, { payload }: any) => {
      state.signupResponse = payload || state.signupResponse;
      state.loading = false
    })
    .addCase(Signup.pending, (state) => {
      state.loading = true
    })
  }
})
export default AuthSlice;