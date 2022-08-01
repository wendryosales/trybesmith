import { NextFunction, Request, Response } from 'express';
import NewError from './error';

const errorHandling = (err: NewError, _req: Request, res: Response, _next: NextFunction) => {
  if (err.message) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
};

export default errorHandling;