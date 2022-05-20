import { Request, Response } from 'express';

interface Error {
    code: number,
    details: any,
    isJoi: boolean,
    message: any,
}

const errorMiddlware = (err: Error, req: Request, res: Response) => {
  console.log(err);
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }

  const status = err.code;

  if (!status) {
    return res.status(500).json({ error: { message: 'Internal Server Error' } });
  }

  return res.status(status).json({ error: { message: err.message } });
};

export default errorMiddlware;
