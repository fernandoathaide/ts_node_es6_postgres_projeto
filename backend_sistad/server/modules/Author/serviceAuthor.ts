import { IAuthor, createAuthors, createAuthor } from './interfaceAuthor';
import * as Bluebird from 'bluebird';
import { IPost } from "../Post/interfacePost";
const model = require('../../models');


class ServiceAuthor implements IAuthor{
    public id_author: number;
    public name: string;
    Post?: IPost[];

    constructor(){}

    createAuthor(author: any){
        return model.Author.create(author);
    }
    getAllAuthor(): Bluebird<IAuthor[]>{
        return model.Author.findAll({
            order: ['name'],
            include: [{ model: model.Post}]
          })
          .then(createAuthors);
    }
    getAuthorById(id_author: number): Bluebird<IAuthor[]>{
        return model.Author.findOne({
            where: {id_author},
            include: [{ model: model.Post}]
          });
    }
    updateAuthor(id_author: number, author: any){
        return model.Author.update(author, {
            where: {id_author},
            fields: ['name'],
            hooks: true,
            individualHooks: true
          });
    }
    deleteAuthor(id_author: number){
        return model.Author.destroy({
            where: {id_author}
          });
    }
}
export default new ServiceAuthor();