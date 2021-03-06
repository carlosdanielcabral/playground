import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateCar = (req: Request, res: Response, next: NextFunction) => {
  const {
    modelo, anoDeFabricação, quantidadeDePortas, marca,
  } = req.body;

  const { error } = Joi.object({
    modelo: Joi.string().required(),
    anoDeFabricação: Joi.number().required(),
    quantidadeDePortas: Joi.number().required(),
    marca: Joi.string().required(),
  })
    .validate({
      modelo,
      anoDeFabricação: Number(anoDeFabricação),
      quantidadeDePortas: Number(quantidadeDePortas),
      marca,
    });

  if (error) return next({ error });

  return next();
};

export default validateCar;
