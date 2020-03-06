import { Request, Response } from 'express';

class UserController {
    constructor(){

    }

    getAll(req: Request, res: Response){
        res.status(200).json({
            messagem: 'ok'
        });
    }
    createUser(req: Request, res: Response){
        res.status(200).json({
            messagem: 'ok'
        });
    }
    getById(req: Request, res: Response){
        res.status(200).json({
            messagem: 'ok'
        });
    }
    updateUser(req: Request, res: Response){
        res.status(200).json({
            messagem: 'ok'
        });
    }
    deleteUser(req: Request, res: Response){
        res.status(200).json({
            messagem: 'ok'
        });
    }
}

export default UserController;