"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var serviceUser_1 = require("../User/serviceUser");
var authSuccess_1 = require("../../api/responses/authSuccess");
var authFail_1 = require("../../api/responses/authFail");
var TokenRoutes = /** @class */ (function () {
    function TokenRoutes() {
    }
    TokenRoutes.prototype.auth = function (req, res) {
        var credentials = {
            email: req.body.email,
            password: req.body.password
        };
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            serviceUser_1.default
                .getUserByEmail(credentials.email)
                .then(_.partial(authSuccess_1.default, res, credentials))
                .catch(_.partial(authFail_1.default, req, res));
        }
    };
    return TokenRoutes;
}());
exports.default = new TokenRoutes();
