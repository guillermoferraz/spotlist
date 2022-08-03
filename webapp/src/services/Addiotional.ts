import axios from "axios";
import env from "../application/env";

const AdditionalService = {
  getLyrics: async (data) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('spt_tkn') : null;
    const response = await axios.post(`${env.apiUri}/lyrics`, data , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );
    return response.data
  }
};
export default AdditionalService;

