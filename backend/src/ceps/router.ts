import { Request, Response, Router as router } from 'express';
import getCepData from './getCepData';
import validateCeps from '../middlewares/validateCeps';

const appRouter = router();

appRouter.get('/', validateCeps, async (req: Request, res: Response) => {
  const ceps: object = req.query;

  const cepsArray = Object.values(ceps);

  const cepsData = cepsArray.map((cep) => getCepData(cep));

  res.status(200).json({ cepsData });
});

export default appRouter;
