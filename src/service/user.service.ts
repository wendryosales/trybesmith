import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';

class UsersService {
  public UsersModel: UsersModel;

  constructor(model: UsersModel = new UsersModel(connection)) {
    this.UsersModel = model;
  }

  post = async (user: User): Promise<User> => this.UsersModel.post(user);
}

export default UsersService;