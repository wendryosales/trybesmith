import { NextFunction, Request, Response } from 'express';

type Err = {
  status: number;
  message: string;
};

const errorHandling = (err: Err, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  
  if (err.message) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
};

export default errorHandling;