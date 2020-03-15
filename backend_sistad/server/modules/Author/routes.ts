import { Request, Response } from 'express';
import ControllerAuthor from './controllerAuthor';

class AuthorRoutes{

    constructor(){}

    indexAuthor(req: Request, res: Response){ 
        return ControllerAuthor.getAllAuthor(req, res); 
    }
    createAuthor(req: Request, res: Response){ 
        return ControllerAuthor.createAuthor(req, res); 
    }
    findOneAuthor(req: Request, res: Response){ 
        return ControllerAuthor.getAuthorById(req, res); 
    }
    updateAuthor(req: Request, res: Response){ 
        return ControllerAuthor.updateAuthor(req, res); 
    }
    destroyAuthor(req: Request, res: Response){ 
        return ControllerAuthor.deleteAuthor(req, res); 
    }

}
export default new AuthorRoutes();