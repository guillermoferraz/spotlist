import { Router } from "express";
import { Response, Request, NextFunction } from "express";
import UserServices from "../services/user";

import { verifyAccess } from "../helpers/verifyAccess";

const router = Router();

const UserControllers = (app: Router) => {
  app.use("/user", router);
  const UserService = new UserServices();

  router.get('/' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log('AUTHORIZATION ON ROUTE:', authorization)
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
=======
    console.log('AUTHORIZATION ON ROUTE:', authorization)
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
=======
    console.log('AUTHORIZATION ON ROUTE:', authorization)
>>>>>>> bb7e218 (user registration and alerts, login and alerts + passport and jwt configured and functional.)
    if(authorization.access){
      const response = await UserService.getUser(authorization?.id);
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  })
};
export default UserControllers;
