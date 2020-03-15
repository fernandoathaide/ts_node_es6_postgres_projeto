"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../../modules/User/routes"));
var routes_2 = __importDefault(require("../../modules/Author/routes"));
var routes_3 = __importDefault(require("../../modules/Post/routes"));
var auth_1 = __importDefault(require("../../modules/auth/auth"));
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.initRoutes = function (app, auth) {
        app.route('/api/users/all').all(auth.config().authenticate()).get(routes_1.default.indexUser);
        app.route('/api/users/create').all(auth.config().authenticate()).post(routes_1.default.createUser);
        app.route('/api/users/:id_user').all(auth.config().authenticate()).get(routes_1.default.findOneUser);
        app.route('/api/users/:id_user/update').all(auth.config().authenticate()).put(routes_1.default.updateUser);
        app.route('/api/users/:id_user/destroy').all(auth.config().authenticate()).delete(routes_1.default.destroyUser);
        app.route('/api/author/all').get(routes_2.default.indexAuthor);
        app.route('/api/author/create').post(routes_2.default.createAuthor);
        app.route('/api/author/:id_author').get(routes_2.default.findOneAuthor);
        app.route('/api/author/:id_author/update').put(routes_2.default.updateAuthor);
        app.route('/api/author/:id_author/destroy').delete(routes_2.default.destroyAuthor);
        app.route('/api/post/all').get(routes_3.default.indexPost);
        app.route('/api/post/create').post(routes_3.default.createPost);
        app.route('/api/post/:id_post').get(routes_3.default.findOnePost);
        app.route('/api/post/:id_post/update').put(routes_3.default.updatePost);
        app.route('/api/post/:id_post/destroy').delete(routes_3.default.destroyPost);
        app.route('/api/token').post(auth_1.default.auth);
    };
    return Routes;
}());
exports.default = new Routes();
//# sourceMappingURL=routes.js.map