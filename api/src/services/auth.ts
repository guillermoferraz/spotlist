import ERRORS from '../constants/errors/errors';
import hashPassword from '../helpers/hashPassword';
import jwt from 'jsonwebtoken';
import env from '../constants/config/env';
/* Models */
import UserModel  from '../db/models/user';
export default class AuthServices {
  userModel
  constructor(
    userModel = UserModel
  ) {
    this.userModel = userModel
  }
  public async signup( formData ): Promise<any> {
    try {
      const { email, password } = formData;
      const lowerCaseEmail = email.toLowerCase();
      const encryptedPassword = await hashPassword( password );

      const user = new UserModel({ email: lowerCaseEmail, password: encryptedPassword })
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

  public async VerifyToken (token):Promise<void|any> {
    try {
      console.log('TOKEN ON SERVICE:', token)
      if(token){
        const splitToken = token.split(' ')[1];
        const response = jwt.verify(splitToken, env?.jwtSecret, (err, id) => {
          if(err){
            return { message: 'Access denied, token expired or incorrect'}
          } else {
            return { message: 'Access Success' }
          }
        })
        return response;
      }
      return { message: "verify token error" }
    } catch (err) {
      console.error(err)
    }
  }

};
