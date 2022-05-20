import { Request, Response, NextFunction } from 'express';
import ERRORS from '../consts/errors';

const validatePurchase = (req: Request, res: Response, next: NextFunction) => {
  const { purchaseValue, providedValue } = req.query;

  if (Number.isNaN(Number(purchaseValue)) || Number.isNaN(Number(providedValue))) {
    return next({ error: ERRORS.invalidInterval });
  }

  if (Number(purchaseValue) > Number(providedValue)) {
    return next({ error: ERRORS.insufficientValue });
  }

  return next();
};

export default validatePurchase;
