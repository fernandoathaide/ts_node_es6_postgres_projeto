import { IUser, IUserDetail, createUser, createUsers, createUserById, createUserByEmail } from './interfaceUser';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class ServiceUser implements IUser{
    public id_user: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){}

    create(user: any){
        return model.User.create(user);
    }
    getAll(): Bluebird<IUser[]>{
        return model.User.findAll({
            order: ['name']
          })
          .then(createUsers);
    }
    getById(id_user: number): Bluebird<IUserDetail[]>{
        return model.User.findOne({
            where: {id_user}
          })
          .then(createUserById);
    }
    getByEmail(email: string): Bluebird<IUserDetail[]>{
        return model.User.findOne({
            where: {email}
          })
          .then(createUserByEmail);
    }
    update(id_user: number, user: any){
        return model.User.update(user, {
            where: {id_user},
            fields: ['name', 'email', 'password'],
            hooks: true,
            individualHooks: true
          });
    }
    delete(id_user: number){
        return model.User.destroy({
            where: {id_user}
          });
    }
}
export default new ServiceUser();