import env from 'src/application/env';
import axios from "axios"

const SpotifyService = {
    login : async (code) => {
        const response = await axios.post(`${env.apiUri}/auth/spotLogin`, { code });
        return response;
    },
    refresh: async(refreshToken) => {
        const response = await axios.post(`${env.apiUri}/auth/refresh`, { refreshToken });
        return response;
    }
  };
  export default SpotifyService;
  