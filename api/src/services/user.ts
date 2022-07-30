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
<<<<<<< HEAD
        const userData = await this.userModel.findOne({ id: user.id })
        console.log('USER DATA:', userData)
        if(userData){
          const response = { email: userData.email, id: userData.id, access: 'Authorized' }
          return response
        }
=======
        console.log(new Date())
        const expiryDate = new Date(user.exp * 1000);
        console.log("fecha de expiracion:", expiryDate)
        return "user email test 123"
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
    } catch (err) { 
      console.error(err)
    }
  };
};
