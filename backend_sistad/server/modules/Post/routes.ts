import { Request, Response } from 'express';
import ControllerPost from './controllerPost';

class PostRoutes{

    constructor(){}

    indexPost(req: Request, res: Response){ 
        return ControllerPost.getAllPost(req, res); 
    }
    createPost(req: Request, res: Response){ 
        return ControllerPost.createPost(req, res); 
    }
    findOnePost(req: Request, res: Response){ 
        return ControllerPost.getPostById(req, res); 
    }
    updatePost(req: Request, res: Response){ 
        return ControllerPost.updatePost(req, res); 
    }
    destroyPost(req: Request, res: Response){ 
        return ControllerPost.deletePost(req, res); 
    }

}
export default new PostRoutes();