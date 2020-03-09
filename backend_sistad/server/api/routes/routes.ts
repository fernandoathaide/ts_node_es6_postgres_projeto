import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';


class Routes {

    constructor(app: Application){
        this.getRoutes(app);
    }

    getRoutes(app: Application): void{
        app.route('/api/users/all').get(UserRoutes.indexUser);
        app.route('/api/users/create').post(UserRoutes.createUser);
        app.route('/api/users/:id_user').get(UserRoutes.findOneUser);
        app.route('/api/users/:id_user/update').put(UserRoutes.updateUser);
        app.route('/api/users/:id_user/destroy').delete(UserRoutes.destroyUser); 
    }
}
export default Routes;