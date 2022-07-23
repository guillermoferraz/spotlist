import axios from 'axios';
import { SigninTypes } from '../components/schemas/Auth.Schema';
const AuthService = {
    Sigin:(data: SigninTypes) => {
        console.table(data)
        return data
    }
}
export default AuthService;