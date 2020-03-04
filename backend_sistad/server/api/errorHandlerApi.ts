import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction){
    console.error(`API error handler foi executado: ${err}`);
    res.status(500).json({
        errorCode: 'Err-001',
        message: 'Erro Interno do Servidor'
    });
}