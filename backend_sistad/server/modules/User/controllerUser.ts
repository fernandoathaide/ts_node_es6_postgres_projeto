import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import { ServiceUser } from './serviceUser';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';


class UserController {
    private serviceUser: ServiceUser;

    constructor(){
        this.serviceUser = new ServiceUser();
    }

   getAllUser(req: Request, res: Response){
        this.serviceUser
            .getAllUser()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os usuários.'))
    }
    createUser(req: Request, res: Response){
        this.serviceUser
            .createUser(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao criar o usuário.'))
    }
    getUserById(req: Request, res: Response){
        this.serviceUser
            .getUserById(parseInt(req.params.id_user))
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar um usuário por ID.'))
    }
    updateUser(req: Request, res: Response){
        const id_user = parseInt(req.params.id_user);
        const props = req.body;
        this.serviceUser
            .updateUser(id_user, props)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao alterar o usuário.'))
    }
    deleteUser(req: Request, res: Response){
        this.serviceUser
            .deleteUser(parseInt(req.params.id_user))
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao deletar um usuário.'))
    }
}
export default new UserController();