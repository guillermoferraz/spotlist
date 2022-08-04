import env from 'src/application/env';
import axios from "axios"
import SpotifyWebApi from "spotify-web-api-node"

const spotifyApi = new SpotifyWebApi({ clientId: env.clientId });
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
    spotifyApi.setAccessToken(data.accessToken)
    if (data.search && data.accessToken) {
      const response = await spotifyApi.searchTracks(data.search, { limit: 50, offset: 1});
      return response.body

    }

  },
  getCurrentPlayback: async (data) => {
    spotifyApi.setAccessToken(data.accessToken)
    const response = await spotifyApi.getMyCurrentPlaybackState()
    return response.body
  },
  getAlbumByArtist: async (data) => {
    spotifyApi.setAccessToken(data.accessToken)
    const response = await spotifyApi.getArtistAlbums(data.id,{ limit: 50 , offset: 1});
    return response.body;
  },
  getAlbum: async (data) => {
    spotifyApi.setAccessToken(data.accessToken)
    const response = await spotifyApi.getAlbum(data.id, { limit: 50 , offset: 1 });
    return response.body;
  },
  getTopArtist: async(data) => {
    spotifyApi.setAccessToken(data.accessToken)
    const response = await spotifyApi.searchTracks('amy lee', { limit: 50, offset: 1});
    return response.body;
  }
};
export default SpotifyService;
