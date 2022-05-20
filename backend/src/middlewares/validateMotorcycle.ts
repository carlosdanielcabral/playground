import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateMotorCycle = (req: Request, res: Response, next: NextFunction) => {
  const {
    modelo, anoDeFabricação, marca, passageiros,
  } = req.body;

  const { error } = Joi.object({
    modelo: Joi.string().required(),
    anoDeFabricação: Joi.number().required(),
    marca: Joi.string().required(),
    passageiros: Joi.number().required(),
  })
    .validate({
      modelo, anoDeFabricação: Number(anoDeFabricação), marca, passageiros: Number(passageiros),
    });

  if (error) return next({ error });

  return next();
};

export default validateMotorCycle;
