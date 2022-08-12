import { Router } from "express";
import { Response, Request, NextFunction } from "express";
import AdditionalsServices from "../services/Addiotionals";

import { verifyAccess } from "../helpers/verifyAccess";

const router = Router();

const AdditionalControllers = (app: Router) => {
  app.use("/", router);
  const AdditionalService = new AdditionalsServices();

  router.post('/lyrics' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await AdditionalService.getLyrics(authorization?.id, req.body);
      console.log("LYRICS RESPONSE:", response)
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  })
};
export default AdditionalControllers;