import { Request, Response } from 'express';
import * as _ from 'lodash';
import ServicePost  from './servicePost';
import Handlers from '../../api/responses/handlers';

class ControllerPost {
    
    constructor(){}

   getAllPost(req: Request, res: Response){
    ServicePost
            .getAllPost()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar todos os Post.'))
    }
    createPost(req: Request, res: Response){
        ServicePost
            .createPost(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao criar Post.'))
    }
    getPostById(req: Request, res: Response){
        ServicePost
            .getPostById(parseInt(req.params.id_Post))
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar um Post por ID.'))
    }
    updatePost(req: Request, res: Response){
        const id_Post = parseInt(req.params.id_Post);
        const props = req.body;
        ServicePost
            .updatePost(id_Post, props)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao alterar o Post.'))
    }
    deletePost(req: Request, res: Response){
        ServicePost
            .deletePost(parseInt(req.params.id_Post))
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao deletar um Post.'))
    }
}
export default new ControllerPost();