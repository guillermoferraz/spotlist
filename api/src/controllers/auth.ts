import { Router } from "express";
import { Response, Request, NextFunction } from "express";
import ERRORS from "../constants/errors/errors";
import AuthServices from "../services/auth";
import passport from 'passport';

const router = Router();

const AuthControllers = (app: Router) => {
  app.use("/auth", router);
  const AuthService = new AuthServices();

  router.post(
    "/signup",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const response = await AuthService.signup(req.body);
        if (response.status === 200) res.json(response);
        else res.status(response.status).json(response);
      } catch (err) {
        next(err);
      }
    }
  );
   router.post("/signin", passport.authenticate("user-local"), async (req, res) => {
    console.log("REQ USER:", req.user + "\n")
    if(req.user === 'User not found') res.status(ERRORS.USER_NOT_FOUND.status).json({ message: ERRORS.USER_NOT_FOUND.message, detail: ERRORS.INCORRECT_PASSWORD.detail })
    if(req.user === 'Incorrect password') res.status(ERRORS.INCORRECT_PASSWORD.status).json({ message: ERRORS.INCORRECT_PASSWORD.message, detail: ERRORS.INCORRECT_PASSWORD.detail })
    if(req.user && !req.user.includes('User not found') && !req.user.includes('Incorrect password')) res.status(200).json({ message: req.user, detail: 'Success login' })
  });
  
/*
  router.post("/signin", async (req, res) => {
    console.log("REQUSET:", req.body);
    res.json({ message: "route functional 123" });
  });
  */
};
export default AuthControllers;

