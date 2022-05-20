import { Request, Response, NextFunction } from 'express';
import ERRORS from '../consts/errors';

const validateInterval = (req: Request, res: Response, next: NextFunction) => {
  const { purchasePrice, providedValue } = req.query;

  if (Number.isNaN(Number(purchasePrice)) || Number.isNaN(Number(providedValue))) {
    return next({ error: ERRORS.invalidInterval });
  }

  if (Number(purchasePrice) > Number(providedValue)) {
    return next({ error: ERRORS.insufficientValue });
  }

  return next();
};

export default validateInterval;
