import { Request, Response } from 'express';
import * as _ from 'lodash';
import ServiceAuthor  from './serviceAuthor';
import Handlers from '../../api/responses/handlers';

class ControllerAuthor {
    
    constructor(){}

   getAllAuthor(req: Request, res: Response){
    ServiceAuthor
            .getAllAuthor()
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar todos os Autores.'))
    }
    createAuthor(req: Request, res: Response){
        ServiceAuthor
            .createAuthor(req.body)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao criar Author.'))
    }
    getAuthorById(req: Request, res: Response){
        ServiceAuthor
            .getAuthorById(parseInt(req.params.id_author))
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao buscar um Author por ID.'))
    }
    updateAuthor(req: Request, res: Response){
        const id_author = parseInt(req.params.id_author);
        const props = req.body;
        ServiceAuthor
            .updateAuthor(id_author, props)
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao alterar o Author.'))
    }
    deleteAuthor(req: Request, res: Response){
        ServiceAuthor
            .deleteAuthor(parseInt(req.params.id_author))
            .then(_.partial(Handlers.onSuccess, res))
            .catch(_.partial(Handlers.onError, res, 'Erro ao deletar um Author.'))
    }
}
export default new ControllerAuthor();