import jwt from 'jsonwebtoken';
import env from '../constants/config/env';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export const verifyAccess = (token: any) => {
  if (token) {
    const splitToken = token.split(' ')[1];
    return jwt.verify(splitToken, env?.jwtSecret, (err, id) => {
      if (err) {
        return { access: false, id: '' }
      } else {
        const decoded = jwtDecode<JwtPayload>(splitToken);
        return { access: true, id: decoded }
      }
    })
  } else {
    return { access: false , id: '' }
  }
};
