"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var serviceUser_1 = require("./serviceUser");
var errorHandler_1 = require("../../api/responses/errorHandler");
var successHandler_1 = require("../../api/responses/successHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAllUser = function (req, res) {
        serviceUser_1.default
            .getAllUser()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar todos os usuários.'));
    };
    UserController.prototype.createUser = function (req, res) {
        serviceUser_1.default
            .createUser(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao criar o usuário.'));
    };
    UserController.prototype.getUserById = function (req, res) {
        serviceUser_1.default
            .getUserById(parseInt(req.params.id_user))
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar um usuário por ID.'));
    };
    UserController.prototype.updateUser = function (req, res) {
        var id_user = parseInt(req.params.id_user);
        var props = req.body;
        serviceUser_1.default
            .updateUser(id_user, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao alterar o usuário.'));
    };
    UserController.prototype.deleteUser = function (req, res) {
        serviceUser_1.default
            .deleteUser(parseInt(req.params.id_user))
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao deletar um usuário.'));
    };
    return UserController;
}());
exports.default = new UserController();
