// import ERRORS from '../constants/errors/errors';
/* Models */
import UserModel  from '../db/models/user';
export default class UserServices {
  userModel
  constructor(
    userModel = UserModel
  ) {
    this.userModel = userModel
  }
  public async getUser(user): Promise<any> {
    try {
        const userData = await this.userModel.findOne({ id: user.id })
        if(userData){
          const response = { email: userData.email, id: userData.id, access: 'Authorized' }
          return response
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
};
