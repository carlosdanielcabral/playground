import {Request, Response, NextFunction} from 'express';
import ERRORS from '../consts/errors';

const validateInterval = (req: Request, res: Response, next: NextFunction) => {
  const {initialValue, finalValue} = req.params;

  if (Number(initialValue) === NaN || Number(finalValue) === NaN) {
    return next({error: ERRORS.invalidInterval});
  }

  next();
};

export default validateInterval;
