"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var Routes = /** @class */ (function () {
    function Routes(app, auth) {
        // this.router = new UserRoutes();
        this.auth = auth;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/users/all').get(routes_1.default.indexUser);
        app.route('/api/users/create').post(routes_1.default.createUser);
        app.route('/api/users/:id_user').get(routes_1.default.findOneUser);
        app.route('/api/users/:id_user/update').put(routes_1.default.updateUser);
        app.route('/api/users/:id_user/destroy').delete(routes_1.default.destroyUser);
        //Rota da passagem do Token
        app.route('/token').post(this.tokenRoute.auth);
    };
    return Routes;
}());
exports.default = Routes;
