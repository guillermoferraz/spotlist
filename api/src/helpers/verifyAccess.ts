import jwt from 'jsonwebtoken';
import env from '../constants/config/env';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export const verifyAccess = (token: any) => {
  if (token) {
<<<<<<< HEAD
    const splitToken = token.split(' ')[1];
    return jwt.verify(splitToken, env?.jwtSecret, (err, id) => {
      if (err) {
        return { access: false, id: '' }
      } else {
=======
    console.log('\nTOKEN ON VERIFY:', token,'\n')
    const splitToken = token.split(' ')[1];
    return jwt.verify(splitToken, env?.jwtSecret, (err, id) => {
      if (err) {
        console.log('\nERROR VERIFY:',err, '\n')
        console.log('\nID VERIFY:', id, '\n')
        console.log('RETORO 1')
        return { access: false, id: '' }
      } else {
        console.log('RETORO 2')
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
        const decoded = jwtDecode<JwtPayload>(splitToken);
        return { access: true, id: decoded }
      }
    })
  } else {
<<<<<<< HEAD
=======
    console.log('RETORO 3')
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
    return { access: false , id: '' }
  }
};
