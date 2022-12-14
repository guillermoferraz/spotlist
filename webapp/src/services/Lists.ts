import axios from "axios";
import env from "../application/env";
const token = typeof window !== 'undefined' ? localStorage.getItem('spt_tkn') : null;
const ListsService = {
  saveList: async (data) => {
    const response = await axios.post(`${env.apiUri}/lists/create`,{ id: data.id, name: data.name },{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });
      return response?.data;
  },
  getLists: async () => {
    const response = await axios.get(`${env.apiUri}/lists`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  },
  delete: async (id) => {
    const response = await axios.delete(`${env.apiUri}/lists/delete/${id}`, {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  },
  updateList: async (listData) => {
    const { name } = listData;
    const response = await axios.patch(`${env.apiUri}/lists/update/${listData._id}`, {name},{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  },
  addTrack: async (data) => {
    const response = await axios.patch(`${env.apiUri}/lists/add/track`, {data},{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  },
  getTrackList: async (id) => {
    const response = await axios.get(`${env.apiUri}/lists/track/list/${id}`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  },
  deleteTrack: async (id) => {
    const response = await axios.delete(`${env.apiUri}/lists/track/delete/${id}`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  }
};
export default ListsService;