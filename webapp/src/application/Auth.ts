import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "src/services/Auth";
import { SigninTypes } from "src/components/schemas/Auth.Schema";

export const Signin = createAsyncThunk(
  "auth/signin",
  async (data: SigninTypes) => {
    try {
      const response = await AuthService.Sigin(data);
      return response;
    } catch (err: any) {
      if (err?.response?.status === 401 || err?.response?.status === 404) {
        return err?.response?.data
      }
    }
  }
);

export const Signup = createAsyncThunk(
  "auth/signup",
  async (data: SigninTypes) => {
    try {
      const response = await AuthService.Signup(data);
      return response;
    } catch (err: any) {
      return { message: err?.response?.data?.detail };
    }
  }
);

export const VerifyToken = createAsyncThunk("auth/verify", async (token: string) => {
  try {
    const response = await AuthService.verifyToken(token);
    return response;
  } catch (err) {
    console.error(err)
  }
})

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    signinResponse: { message: '', detail: '', token: '' },
    signupResponse: { message: '' },
    loading: false,
    verifyResponse: { message: undefined }
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload.value
    },
    setVerifyToken: (state, { payload }) => {
      state.verifyResponse = payload.value
    },
    setSaveToken: (state, { payload }) => {
      localStorage.setItem('spt_tkn', payload.token)
    },
    setSignupResponse: (state, { payload }) => {
      state.signupResponse = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(Signin.fulfilled, (state, { payload }) => {
        state.signinResponse = payload || state.signinResponse;
        state.loading = false;
      })
      .addCase(Signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(Signup.fulfilled, (state, { payload }: any) => {
        state.signupResponse = payload || state.signupResponse;
        state.loading = false;
      })
      .addCase(Signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(VerifyToken.fulfilled, (state, { payload }: any) => {
        state.verifyResponse = payload || state.verifyResponse;
        state.loading = false;
      })
      .addCase(VerifyToken.pending, (state) => {
        state.loading = true;
      });
  },
});
export default AuthSlice;

