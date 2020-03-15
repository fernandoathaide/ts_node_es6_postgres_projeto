"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllerAuthor_1 = __importDefault(require("./controllerAuthor"));
var UserRoutes = (function () {
    function UserRoutes() {
    }
    UserRoutes.prototype.indexUser = function (req, res) {
        return controllerAuthor_1.default.getAllAuthor(req, res);
    };
    UserRoutes.prototype.createUser = function (req, res) {
        return controllerAuthor_1.default.createAuthor(req, res);
    };
    UserRoutes.prototype.findOneUser = function (req, res) {
        return controllerAuthor_1.default.getAuthorById(req, res);
    };
    UserRoutes.prototype.updateUser = function (req, res) {
        return controllerAuthor_1.default.updateAuthor(req, res);
    };
    UserRoutes.prototype.destroyUser = function (req, res) {
        return controllerAuthor_1.default.deleteAuthor(req, res);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes();
//# sourceMappingURL=routes.js.map