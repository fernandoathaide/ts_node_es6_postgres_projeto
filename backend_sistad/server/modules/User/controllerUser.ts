import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import ServiceUser  from './serviceUser';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';


class UserController {
    

    constructor(){
        
    }

   getAllUser(req: Request, res: Response){
        ServiceUser
            .getAllUser()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os usuários.'))
    }
    createUser(req: Request, res: Response){
        ServiceUser
            .createUser(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao criar o usuário.'))
    }
    getUserById(req: Request, res: Response){
        ServiceUser
            .getUserById(parseInt(req.params.id_user))
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar um usuário por ID.'))
    }
    updateUser(req: Request, res: Response){
        const id_user = parseInt(req.params.id_user);
        const props = req.body;
        ServiceUser
            .updateUser(id_user, props)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao alterar o usuário.'))
    }
    deleteUser(req: Request, res: Response){
        ServiceUser
            .deleteUser(parseInt(req.params.id_user))
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao deletar um usuário.'))
    }
}
export default new UserController();