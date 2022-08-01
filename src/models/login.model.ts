import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class LoginModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  login = async (username: string, password: string): Promise<[User]> => {
    const [rows] = await this.connection.query(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ? ;',
      [username, password],
    );
    
    return rows as unknown as [User];
  };
}

export default LoginModel;