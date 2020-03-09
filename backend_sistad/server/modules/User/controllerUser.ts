import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import { ServiceUser } from './serviceUser';


class UserController {
    private serviceUser: ServiceUser;

    constructor(){
        this.serviceUser = new ServiceUser();
    }

   getAllUser(req: Request, res: Response){
        this.serviceUser
            .getAllUser()
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                });
            }).catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: `Erro ao buscar todos os usuários. ${err}`
                });
            });
    }
    createUser(req: Request, res: Response){
        this.serviceUser
            .createUser(req.body)
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                });
            }).catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: `Erro ao cadastrar novo usuários. ${err}`
                });
            });
    }
    getUserById(req: Request, res: Response){
        this.serviceUser
            .getUserById(parseInt(req.params.id_user))
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                });
            }).catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: `Erro ao buscar usuário por ID. ${err}`
                });
            });
    }
    updateUser(req: Request, res: Response){
        const id_user = parseInt(req.params.id_user);
        const props = req.body;
        this.serviceUser
            .updateUser(id_user, props)
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                });
            }).catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: `Erro ao alterar usuário por ID. ${err}`
                });
            });
    }
    deleteUser(req: Request, res: Response){
        this.serviceUser
            .deleteUser(parseInt(req.params.id_user))
            .then(data => {
                res.status(HTTPStatus.OK).json({
                    payload: data
                });
            }).catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                    payload: `Erro ao deletar usuário por ID. ${err}`
                });
            });
    }
}
export default new UserController();