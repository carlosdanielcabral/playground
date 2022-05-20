import {Router as router, Request, Response} from 'express';
import getChange from '../monetary';
import validatePurchase from '../middlewares/validatePurchase';

const appRouter = router();

appRouter.get('/', validatePurchase, (req: Request, res: Response) => {
  const {purchasePrice, providedValue} = req.query;

  const change = getChange(Number(purchasePrice), Number(providedValue));

  res.status(200).json({change});
});

export default appRouter;
