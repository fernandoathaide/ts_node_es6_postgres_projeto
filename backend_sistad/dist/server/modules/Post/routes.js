"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controllerPost_1 = __importDefault(require("./controllerPost"));
var PostRoutes = (function () {
    function PostRoutes() {
    }
    PostRoutes.prototype.indexPost = function (req, res) {
        return controllerPost_1.default.getAllPost(req, res);
    };
    PostRoutes.prototype.createPost = function (req, res) {
        return controllerPost_1.default.createPost(req, res);
    };
    PostRoutes.prototype.findOnePost = function (req, res) {
        return controllerPost_1.default.getPostById(req, res);
    };
    PostRoutes.prototype.updatePost = function (req, res) {
        return controllerPost_1.default.updatePost(req, res);
    };
    PostRoutes.prototype.destroyPost = function (req, res) {
        return controllerPost_1.default.deletePost(req, res);
    };
    return PostRoutes;
}());
exports.default = new PostRoutes();
//# sourceMappingURL=routes.js.map