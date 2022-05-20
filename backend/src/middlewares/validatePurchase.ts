import {Request, Response, NextFunction} from 'express';
import ERRORS from '../consts/errors';

const validateInterval = (req: Request, res: Response, next: NextFunction) => {
  const {purchasePrice, providedValue} = req.query;

  if (Number(purchasePrice) === NaN || Number(providedValue) === NaN) {
    return next({error: ERRORS.invalidInterval});
  }

  if (Number(purchasePrice) > Number(providedValue)) {
    return next({error: ERRORS.insufficientValue});
  }

  next();
};

export default validateInterval;
