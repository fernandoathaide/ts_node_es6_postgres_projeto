import { IPost, createPosts } from './interfacePost';
import { IAuthor } from "../Author/interfaceAuthor";
import * as Bluebird from 'bluebird';
const model = require('../../models');

class ServicePost implements IPost{
    public id_post: number;
    public title: string;
    public text: string;
    fk_id_author?: number;
    Author?: IAuthor[];

    constructor(){}

    createPost(post: any){
        return model.Post.create(post);
    }
    getAllPost(): Bluebird<IPost[]>{
        return model.Post.findAll({
            order: ['title'],
            include: [{ model: model.Author }]
          })
          .then(createPosts);
    }
    getPostById(id_post: number): Bluebird<IPost[]>{
        return model.Post.findOne({
            where: {id_post},
            include: [{ model: model.Author }]
          });
    }
    updatePost(id_post: number, post: any){
        return model.Post.update(post, {
            where: {id_post},
            fields: ['title','text','fk_id_author'],
            hooks: true,
            individualHooks: true
          });
    }
    deletePost(id_post: number){
        return model.Post.destroy({
            where: {id_post}
          });
    }
}
export default new ServicePost();