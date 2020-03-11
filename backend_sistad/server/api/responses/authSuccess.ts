import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';
import * as bcrypt from 'bcrypt';
const config = require('../../config/env/config')();

export default function authSuccess(res: Response, credentials: any, data: any){
    const isMatch = bcrypt.compareSync(credentials.password, data.password);

    if(isMatch){
        const payload = {id_user: data.id_user};
        res.json({
            token: jwt.encode(payload, config.secret)
        });
    }else {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
}