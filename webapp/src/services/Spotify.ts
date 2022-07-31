import env from 'src/application/env';
import axios from "axios"
import SpotifyWebApi from "spotify-web-api-node"


const SpotifyService = {
  login: async (code) => {
    const response = await axios.post(`${env.apiUri}/auth/spotLogin`, { code });
    return response;
  },
  refresh: async (refreshToken) => {
    const response = await axios.post(`${env.apiUri}/auth/refresh`, { refreshToken });
    return response;
  },
  searchTracks: async (data) => {
    const spotifyApi = new SpotifyWebApi({ clientId: env.clientId });
    spotifyApi.setAccessToken(data.accessToken)
    if (data.search && data.accessToken) {
      const response = await spotifyApi.searchTracks(data.search);
      return response.body

    }

  }
};
export default SpotifyService;
