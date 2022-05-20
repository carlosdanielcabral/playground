import { Router as router, Request, Response } from 'express';
import getChange from './getChange';
import validatePurchase from '../middlewares/validatePurchase';

const appRouter = router();

appRouter.get('/', validatePurchase, (req: Request, res: Response) => {
  const { purchaseValue, providedValue } = req.query;

  const change = getChange(Number(purchaseValue), Number(providedValue));

  res.status(200).json({ change });
});

export default appRouter;
