import axios from "axios";
import env from "../application/env";
import { SigninTypes } from "../components/schemas/Auth.Schema";

const AuthService = {
  Sigin: async (data: SigninTypes) => {
    const res = await axios.post(`${env.apiUri}/auth/signin`, data);
    const response = res.data;
    return response;
  },
  Signup: async (formData: SigninTypes) => {
    const response =  await axios.post(`${env.apiUri}/auth/signup`, formData);
    return response.data;
  },
  verifyToken: async (token: string) => {
    const response = await axios.post(`${env.apiUri}/auth/verify`,{},{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response?.data;
  }
};
export default AuthService;

