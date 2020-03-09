"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var serviceUser_1 = require("./serviceUser");
var UserController = /** @class */ (function () {
    function UserController() {
        this.serviceUser = new serviceUser_1.ServiceUser();
    }
    UserController.prototype.getAllUser = function (req, res) {
        this.serviceUser
            .getAllUser()
            .then(function (data) {
            res.status(HTTPStatus.OK).json({
                payload: data
            });
        }).catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                payload: "Erro ao buscar todos os usu\u00E1rios. " + err
            });
        });
    };
    UserController.prototype.createUser = function (req, res) {
        this.serviceUser
            .createUser(req.body)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({
                payload: data
            });
        }).catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                payload: "Erro ao cadastrar novo usu\u00E1rios. " + err
            });
        });
    };
    UserController.prototype.getUserById = function (req, res) {
        this.serviceUser
            .getUserById(parseInt(req.params.id_user))
            .then(function (data) {
            res.status(HTTPStatus.OK).json({
                payload: data
            });
        }).catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                payload: "Erro ao buscar usu\u00E1rio por ID. " + err
            });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        var id_user = parseInt(req.params.id_user);
        var props = req.body;
        this.serviceUser
            .updateUser(id_user, props)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({
                payload: data
            });
        }).catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                payload: "Erro ao alterar usu\u00E1rio por ID. " + err
            });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        this.serviceUser
            .deleteUser(parseInt(req.params.id_user))
            .then(function (data) {
            res.status(HTTPStatus.OK).json({
                payload: data
            });
        }).catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
                payload: "Erro ao deletar usu\u00E1rio por ID. " + err
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
