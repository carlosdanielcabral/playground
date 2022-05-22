import { Request, Response, NextFunction } from 'express';
import ERRORS from '../consts/errors';

const validateCeps = (req: Request, res: Response, next: NextFunction) => {
  const ceps: object = req.query;

  const cepsArray = Object.values(ceps);

  if (cepsArray.length !== 5) return next({ error: ERRORS.invalidCep });

  for (let i = 0; i < cepsArray.length; i += 1) {
    if (cepsArray[i].length !== 8 || Number.isNaN(Number(cepsArray[i]))) {
      return next({ error: ERRORS.invalidCep });
    }
  }

  return next();
};

export default validateCeps;
