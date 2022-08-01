import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Payload from '../interfaces/payload.interface';

dotenv.config();

class AuthService {
  sign = (payload: Payload) => jwt.sign(payload, process.env.JWT_SECRET as string);
}

export default AuthService;