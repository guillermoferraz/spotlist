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
        console.log('USER ON SERVICE:', user)
        const userData = await this.userModel.findOne({ id: user.id })
        console.log('USER DATA:', userData)
        if(userData){
          const response = { email: userData.email, id: userData.id, access: 'Authorized' }
          return response
        }
    } catch (err) { 
      console.error(err)
    }
  };
};
