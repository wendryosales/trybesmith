import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Payload from '../interfaces/payload.interface';

dotenv.config();

const secret = process.env.JWT_SECRET || 'mysecret';

class AuthService {
  sign = (payload: Payload) => jwt.sign(payload, secret as string);

  verify = (token: string) => jwt.verify(token, secret as string);
}

export default AuthService;