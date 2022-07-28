import axios from 'axios';
import env from '../application/env';
import { SigninTypes } from '../components/schemas/Auth.Schema';
const AuthService = {
    Sigin:(data: SigninTypes) => {
        console.table(data)
        return data
    },
    Signup: async (formData: SigninTypes) => {
        const res: any = await axios.post(`${env.apiUri}/auth/signup`, formData);
        const data = res?.status === 200 ? res?.data : res;
        return data;
    }
}
export default AuthService;