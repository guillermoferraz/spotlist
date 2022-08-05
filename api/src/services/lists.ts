// import ERRORS from '../constants/errors/errors';
/* Models */
import UserModel from '../db/models/user';
import ListsModel from '../db/models/lists';
export default class ListsServices {
  userModel;
  listsModel;
  constructor(
    userModel = UserModel,
    listsModel = ListsModel
  ) {
    this.userModel = userModel
    this.listsModel = listsModel
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
};
