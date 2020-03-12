import { IUser, IUserDetail, createUsers, createUserById, createUserByEmail } from './interfaceUser';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class ServiceUser implements IUser{
    public id_user: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){}

    createUser(user: any){
        return model.User.create(user);
    }
    getAllUser(): Bluebird<IUser[]>{
        return model.User.findAll({
            order: ['name']
          })
          .then(createUsers);
    }
    getUserById(id_user: number): Bluebird<IUserDetail[]>{
        return model.User.findOne({
            where: {id_user}
          })
          .then(createUserById);
    }
    getUserByEmail(email: string): Bluebird<IUserDetail[]>{
        return model.User.findOne({
            where: {email}
          })
          .then(createUserByEmail);
    }
    updateUser(id_user: number, user: any){
        return model.User.update(user, {
            where: {id_user},
            fields: ['name', 'email', 'password'],
            hooks: true,
            individualHooks: true
          });
    }
    deleteUser(id_user: number){
        return model.User.destroy({
            where: {id_user}
          });
    }
}
export default new ServiceUser();