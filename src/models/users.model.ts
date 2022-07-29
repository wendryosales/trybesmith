import { Pool } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UsersModel {
  public connection: Pool;

  public constructor(connection: Pool) {
    this.connection = connection;
  }

  post = async (values: User): Promise<User> => {
    const sql = `INSERT INTO Trybesmith.Users 
            (username, classe, level, password)
            VALUES (?, ?, ?, ?)`;
    const [rows] = await this.connection
      .query(sql, [
        values.username,
        values.classe,
        values.level,
        values.password, 
      ]);
    
    return rows as unknown as User;
  };
}

export default UsersModel;