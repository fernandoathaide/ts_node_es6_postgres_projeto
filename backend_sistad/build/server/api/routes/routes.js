"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var Routes = /** @class */ (function () {
    function Routes(app, auth) {
        // this.router = new UserRoutes();
        this.tokenRoute = auth_1.default;
        this.auth = auth;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/users/all').all(this.auth.authenticate()).get(routes_1.default.indexUser);
        app.route('/api/users/create').all(this.auth.authenticate()).post(routes_1.default.createUser);
        app.route('/api/users/:id_user').all(this.auth.authenticate()).get(routes_1.default.findOneUser);
        app.route('/api/users/:id_user/update').all(this.auth.authenticate()).put(routes_1.default.updateUser);
        app.route('/api/users/:id_user/destroy').all(this.auth.authenticate()).delete(routes_1.default.destroyUser);
        app.route('/').get(function (req, res) { return res.send('Ola você SISTAD!'); });
        //Rota da passagem do Token
        app.route('/token').post(this.tokenRoute.auth);
    };
    return Routes;
}());
exports.default = Routes;
