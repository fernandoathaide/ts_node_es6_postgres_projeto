import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export function onError(res: Response, msn: string, error: any){
    console.log(`Error Interno do Server: ${error}`)
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(msn);
}
