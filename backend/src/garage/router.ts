import { Router as router, Request, Response } from 'express';
import Carro from './carro.model';

const appRouter = router();

appRouter.post('/', async (req: Request, res: Response) => {
  const {
    modelo, anoDeFabricação, quantidadeDePortas, marca,
  } = req.body;

  const carro = new Carro(modelo, anoDeFabricação, quantidadeDePortas, marca);

  const response = await carro.salvarCarro();

  res.status(201).json({ response });
});

export default appRouter;
