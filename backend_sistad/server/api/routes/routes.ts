import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth'
import { all } from 'bluebird';


class Routes {

    // private router: UserRoutes;
    private tokenRoute;
    private auth;

    constructor(app: Application, auth: any){
        // this.router = new UserRoutes();
        this.tokenRoute = TokenRoutes;
        this.auth = auth;
        this.getRoutes(app);
    }

    getRoutes(app: Application): void{
        app.route('/api/users/all').all(this.auth.authenticate()).get(UserRoutes.indexUser);
        app.route('/api/users/create').all(this.auth.authenticate()).post(UserRoutes.createUser);
        app.route('/api/users/:id_user').all(this.auth.authenticate()).get(UserRoutes.findOneUser);
        app.route('/api/users/:id_user/update').all(this.auth.authenticate()).put(UserRoutes.updateUser);
        app.route('/api/users/:id_user/destroy').all(this.auth.authenticate()).delete(UserRoutes.destroyUser);
        
        //app.route('/').get(function (req, res) { return res.send('Ola você SISTAD!'); });
        //Rota para acesso ao coverage
        app.route('/coverage').get(function (req, res) { return res.sendFile('/home/fernano/Documentos/ESTUDOS/ts_node_es6_postgres_projeto/backend_sistad/coverage/index.html'); });

        //Rota da passagem do Token
        app.route('/token').post(this.tokenRoute.auth);

    }
}
export default Routes;