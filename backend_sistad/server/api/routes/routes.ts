import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';
import AuthorRouts from '../../modules/Author/routes';
import PostRouts from '../../modules/Post/routes';
import TokenRoutes from '../../modules/auth/auth'

class Routes {

    constructor(){}

    initRoutes(app: Application, auth: any): void{
        //Rotas para User
        app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.indexUser);
        app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.createUser);
        app.route('/api/users/:id_user').all(auth.config().authenticate()).get(UserRoutes.findOneUser);
        app.route('/api/users/:id_user/update').all(auth.config().authenticate()).put(UserRoutes.updateUser);
        app.route('/api/users/:id_user/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroyUser);
        
        //Rotas para Author
        app.route('/api/author/all').get(AuthorRouts.indexAuthor);
        app.route('/api/author/create').post(AuthorRouts.createAuthor);
        app.route('/api/author/:id_author').get(AuthorRouts.findOneAuthor);
        app.route('/api/author/:id_author/update').put(AuthorRouts.updateAuthor);
        app.route('/api/author/:id_author/destroy').delete(AuthorRouts.destroyAuthor);

        //Rotas para Post
        app.route('/api/post/all').get(PostRouts.indexPost);
        app.route('/api/post/create').post(PostRouts.createPost);
        app.route('/api/post/:id_post').get(PostRouts.findOnePost);
        app.route('/api/post/:id_post/update').put(PostRouts.updatePost);
        app.route('/api/post/:id_post/destroy').delete(PostRouts.destroyPost);
        
        //app.route('/').get(function (req, res) { return res.send('Ola você SISTAD!'); });
        //Rota para acesso ao coverage
        //app.route('/coverage').get(function (req, res) { return res.sendFile('/home/fernano/Documentos/ESTUDOS/ts_node_es6_postgres_projeto/backend_sistad/coverage/index.html'); });

        //Rota da passagem de User Email e geração do Token
        app.route('/api/token').post(TokenRoutes.auth);

    }
}
export default new Routes();