import * as HTTPStatus from 'http-status';
import { Request, Response } from 'express';
import * as _ from 'lodash';

class UserController {
    constructor(){

    }

    getAll(req: Request, res: Response){
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    }
    createUser(req: Request, res: Response){
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    }
    getById(req: Request, res: Response){
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    }
    updateUser(req: Request, res: Response){
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    }
    deleteUser(req: Request, res: Response){
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    }
}

export default UserController;