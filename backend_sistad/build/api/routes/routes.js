"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Ola você SISTAD!'); });
        app.route('/ola/:nome').get(function (req, res) { return res.send("Ola " + req.params.nome + " SISTAD!"); });
    };
    return Routes;
}());
exports.default = Routes;
