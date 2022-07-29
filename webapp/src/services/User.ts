import axios from "axios";
import env from "../application/env";

const UserService = {
  getUser: async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('spt_tkn') : null;
    const response = await axios.get(`${env.apiUri}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );
    return response.data
  }
};
export default UserService;

