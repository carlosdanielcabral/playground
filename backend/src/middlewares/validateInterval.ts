import { Request, Response, NextFunction } from 'express';
import ERRORS from '../consts/errors';

const validateInterval = (req: Request, res: Response, next: NextFunction) => {
  const { initialValue, finalValue } = req.query;

  if (Number.isNaN(Number((initialValue))) || Number.isNaN(Number(finalValue))) {
    return next({ error: ERRORS.invalidInterval });
  }

  return next();
};

export default validateInterval;
