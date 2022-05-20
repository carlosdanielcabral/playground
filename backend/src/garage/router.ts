import { Router as router, Request, Response } from 'express';
import Carro from './carro.model';
import Moto from './moto.model';

const appRouter = router();

appRouter.post('/carro', async (req: Request, res: Response) => {
  const {
    modelo, anoDeFabricação, quantidadeDePortas, marca,
  } = req.body;

  const carro = new Carro(modelo, anoDeFabricação, quantidadeDePortas, marca);

  const response = await carro.salvarCarro();

  res.status(201).json({ response });
});

appRouter.post('/moto', async (req: Request, res: Response) => {
  const {
    modelo, anoDeFabricação, marca, passageiros,
  } = req.body;

  const moto = new Moto(modelo, anoDeFabricação, marca, passageiros);

  const response = await moto.salvarMoto();

  res.status(201).json({ response });
});

export default appRouter;
