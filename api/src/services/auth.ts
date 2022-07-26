const db = require('../db/db.json')
import ERRORS from '../constants/errors/errors';
export default class AuthServices {

  public async signin(formData): Promise<any> {
    try {
      console.log(formData)
      const existUser = db &&  db.users.length > 0 && db.users.filter(user => user.email === formData.email);
      if(existUser[0]) {
        console.log('El usuario ya existe')
        return ERRORS.USER_ALREADY_EXISTS
      }
      else console.log(' el usuario no existe')
      const response = { message: 'Success', status: 200 }
      return response
    } catch (err) {
      console.error(err)
    }
  };
};
