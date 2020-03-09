import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function dbErrorHandler(res: Response, error: any){
    console.log(`Error de Data Base: ${error}`)
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'Error-01',
        message: 'Erro de acesso a base de dados.'
    });
}
