import { IUser, IUserDetail, createUser, createUsers, createUserById, createUserByEmail } from './interfaceUser';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class User implements IUser{
    public id_user: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){}

    create(user: any){}
    getAll(): Bluebird<IUser[]>{}
    getById(id_user: number): Bluebird<IUserDetail[]>{}
    getByEmail(id_user: number): Bluebird<IUserDetail[]>{}
    update(id_user: number, user: any){}
    delete(id_user: number){}

}