import { Request, Response, NextFunction } from 'express';
import { OutgoingMessage } from 'http';

type Details = {
  message: string,
}

type ErrorObj = {
  code: number,
  message: string,
}

type Error = {
    code: number,
    details: Details[],
    isJoi: boolean,
    message: string,
    error: ErrorObj,
}

const errorMiddlware = (err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }

  const status = err.error.code;

  if (!status) {
    return res.status(500).json({ error: { message: 'Internal Server Error' } });
  }

  return res.status(status).json({ error: { message: err.error.message } });
};

export default errorMiddlware;
