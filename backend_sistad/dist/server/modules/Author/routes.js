"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllerAuthor_1 = __importDefault(require("./controllerAuthor"));
var AuthorRoutes = (function () {
    function AuthorRoutes() {
    }
    AuthorRoutes.prototype.indexAuthor = function (req, res) {
        return controllerAuthor_1.default.getAllAuthor(req, res);
    };
    AuthorRoutes.prototype.createAuthor = function (req, res) {
        return controllerAuthor_1.default.createAuthor(req, res);
    };
    AuthorRoutes.prototype.findOneAuthor = function (req, res) {
        return controllerAuthor_1.default.getAuthorById(req, res);
    };
    AuthorRoutes.prototype.updateAuthor = function (req, res) {
        return controllerAuthor_1.default.updateAuthor(req, res);
    };
    AuthorRoutes.prototype.destroyAuthor = function (req, res) {
        return controllerAuthor_1.default.deleteAuthor(req, res);
    };
    return AuthorRoutes;
}());
exports.default = new AuthorRoutes();
