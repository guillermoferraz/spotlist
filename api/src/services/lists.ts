// import ERRORS from '../constants/errors/errors';
/* Models */
import UserModel from '../db/models/user';
import ListsModel from '../db/models/lists';
import TrackModel from '../db/models/tracks';
import { set } from 'mongoose';
export default class ListsServices {
  userModel;
  listsModel;
  trackModel;
  constructor(
    userModel = UserModel,
    listsModel = ListsModel,
    trackModel = TrackModel
  ) {
    this.userModel = userModel
    this.listsModel = listsModel
    this.trackModel = trackModel
  }
  public async saveList(user, data): Promise<any> {
    try {
      const userData = await this.userModel.findOne({ id: user.id })
      const addNewList = async ({ userId, name }) => {
        const list = new ListsModel({ userId: userId, name: name });
        await list.save();
        return 'New List added'
      };

      if (userData) {
        const existList = await this.listsModel.findOne({ userId: user.id, name: data.name })
        if (existList) {
          return 'Error'
        } else {
          return await addNewList({ userId: user.id, name: data.name });
        }
      } else {
        return {
          email: "",
          id: "",
          access: "Denied"
        }
      }
    } catch (err) {
      console.error(err)
    }
  };
  public async getLists(user): Promise<any> {
    try {
      const existUser = await this.userModel.findOne({ id: user.id })
      if(existUser){
          const lists = await this.listsModel.find({ userId: user.id })
          return lists
      } else {
        return {
          email: "",
          id: "",
          access: "Denied"
        }
      }
    } catch (err) {
      console.error(err)
    }
  }
  public async deleteList(user, id): Promise<any>{
    try { 
      const existUser = await this.userModel.findOne({ _id: user.id })
      if(existUser){
        await this.listsModel.findByIdAndDelete({ _id: id })
        return 'Delete Success'
      } else {
        return 'Error'
      }
    } catch(err) {
      console.error(err)
    }
  }

  public async updateList (data): Promise<any>{
    try {
      const { user, id, name } = data;
      const existUser = await this.userModel.findOne({ _id: user.id });
      if(existUser){
        await this.listsModel.findOneAndUpdate({ _id: id }, {$set: { "name": name }});
        return 'Updated successfully';
      } else {
        return 'Error'
      }
    } catch (err) {
      console.error(err)
    }
  }
  
  public async addTrack (data): Promise<any>{
    try {
      const { user, trackId, listId, item } = data;
      const existUser = await this.userModel.findOne({ _id: user.id });
      if(existUser){
        const existTracksList = await this.trackModel.findOne({ listId: listId, userId: user.id });
        if(existTracksList){
          await this.trackModel.findOneAndUpdate(
            { listId: listId, userId: user.id }, 
            { $set: { "tracks": [...existTracksList.tracks, "spotify:track:" + trackId], "userId": existTracksList.userId, "listId": existTracksList.listId, "items": [...existTracksList.items, JSON.stringify(item)] }
          })
          return 'Track added successfully';
        } else {
          const newTrack = new TrackModel({ tracks: "spotify:track:" + trackId, listId: listId, userId: user.id, items: [JSON.stringify(item)] });
          await newTrack.save();
          return 'Track added successfully';
        }
      } else {
        return 'Error'
      }
    } catch (err) {
      console.error(err)
    }
  }
  
  public async getTrackList (user, id): Promise<any>{
    try {
      const existUser = await this.userModel.findOne({ _id: user.id });
      if(existUser){
        const trackList = await this.trackModel.findOne({ listId: id, userId: user.id })
        return trackList
      } else {
        return 'Error'
      }
    } catch (err) {
      console.error(err)
    }
  }
  public async deleteTrack (user, id): Promise<any> {
    try {
      const existUser = await this.userModel.findOne({ _id: user.id });
      if(existUser){
        if(id){
          const trackId = id.split('&LIST_ID=')[0]
          const listId = id.split('&LIST_ID=')[1]

          const list = await this.trackModel.findOne({ listId: listId })
          if(list) {
            const parseList= { ...list, items: list.items.map(item => JSON.parse(item)) }
            const removeTrack = parseList && parseList.items.filter(item => item.id !== trackId)
            const tracks = list.tracks.filter(track => track !== 'spotify:track:'+ trackId )
            removeTrack.length > 0 && await this.trackModel.findOneAndUpdate({ listId: listId, userId: user.id }, {$set: { "items": removeTrack.map(i => JSON.stringify(i)) , tracks: tracks} })
            return 'Track deleted successfully'
          } else {
            return 'Error'
          }
        }else {
          return 'Error'
        }
      } else {
        return 'Error'
      }
    } catch (err) {
      console.error(err)
    }
  }
};
