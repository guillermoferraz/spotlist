import { Router } from "express";
import { Response, Request, NextFunction } from "express";
import ListsServices from "../services/lists";

import { verifyAccess } from "../helpers/verifyAccess";

const router = Router();

const ListControllers = (app: Router) => {
  app.use("/lists", router);
  const ListService = new ListsServices();

  router.post('/create' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.saveList(authorization?.id, req.body);
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  });
  router.get('/' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.getLists(authorization?.id);
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  });
  router.delete('/delete/:id' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.deleteList(authorization?.id, req.params.id);
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  });
  router.patch('/update/:id' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.updateList({user: authorization?.id, id: req.params.id, name: req.body.name});
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  })
  router.patch('/add/track' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.addTrack({user: authorization?.id, trackId: req.body.data.trackId, listId: req.body.data.listId, item: req.body.data.item});
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  })
  router.get('/track/list/:id' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.getTrackList(authorization?.id, req.params.id);
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  });
  router.delete('/track/delete/:id' ,async (req: Request, res: Response, next: NextFunction) => {
    const authorization = verifyAccess(req.headers['authorization']);
    if(authorization.access){
      const response = await ListService.deleteTrack(authorization?.id, req.params.id);
      res.json(response)
    } else {
      res.json({ access: 'Denied' })
    }
  })
};
export default ListControllers;
