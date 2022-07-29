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
        console.log(new Date())
        const expiryDate = new Date(user.exp * 1000);
        console.log("fecha de expiracion:", expiryDate)
        return "user email test 123"
    } catch (err) { 
      console.error(err)
    }
  };
};
