import { Request, Response } from 'express';

type Details = {
  message: string,
}

type Error = {
    code: number,
    details: Details[],
    isJoi: boolean,
    message: string,
}

const errorMiddlware = (err: Error, req: Request, res: Response) => {
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
