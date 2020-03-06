"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (req, res) {
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    };
    UserController.prototype.createUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    };
    UserController.prototype.getById = function (req, res) {
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        res.status(HTTPStatus.OK).json({
            messagem: 'ok'
        });
    };
    return UserController;
}());
exports.default = UserController;
