import ERRORS from '../constants/errors/errors';

/* Models */
import UserModel  from '../db/models/user';
export default class AuthServices {
  userModel
  constructor(
    userModel = UserModel
  ) {
    this.userModel = userModel
  }
  public async signup(formData): Promise<any> {
    try {
      const { email, password } = formData;
      const lowerCaseEmail = email.toLowerCase();

      const user = new UserModel({email: lowerCaseEmail, password})
      const existUser = await this.userModel.findOne({ email: lowerCaseEmail })
      
      if (existUser) {
        console.log('[❌]*** USER EXIST IN DATABASE ***', existUser)
        return ERRORS.USER_ALREADY_EXISTS
      } else {
        if(user) {
          await user.save();
          console.log('[✅] *** NEW USER SAVED ***')
          const response = { message: 'Success', status: 200 }
        return response
        }
      }
    } catch (err) {
      console.error(err)
    }
  };
};
