import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';


class Routes {

    // private router: UserRoutes;
    private tokenRoute;
    private auth;

    constructor(app: Application, auth: any){
        // this.router = new UserRoutes();
        this.auth = auth;
        this.getRoutes(app);
    }

    getRoutes(app: Application): void{
        app.route('/api/users/all').get(UserRoutes.indexUser);
        app.route('/api/users/create').post(UserRoutes.createUser);
        app.route('/api/users/:id_user').get(UserRoutes.findOneUser);
        app.route('/api/users/:id_user/update').put(UserRoutes.updateUser);
        app.route('/api/users/:id_user/destroy').delete(UserRoutes.destroyUser);
        
        //Rota da passagem do Token
        app.route('/token').post(this.tokenRoute.auth);

    }
}
export default Routes;