"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var servicePost_1 = __importDefault(require("./servicePost"));
var handlers_1 = __importDefault(require("../../api/responses/handlers"));
var ControllerPost = (function () {
    function ControllerPost() {
    }
    ControllerPost.prototype.getAllPost = function (req, res) {
        servicePost_1.default
            .getAllPost()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar todos os Post.'));
    };
    ControllerPost.prototype.createPost = function (req, res) {
        servicePost_1.default
            .createPost(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao criar Post.'));
    };
    ControllerPost.prototype.getPostById = function (req, res) {
        servicePost_1.default
            .getPostById(parseInt(req.params.id_Post))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar um Post por ID.'));
    };
    ControllerPost.prototype.updatePost = function (req, res) {
        var id_Post = parseInt(req.params.id_Post);
        var props = req.body;
        servicePost_1.default
            .updatePost(id_Post, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao alterar o Post.'));
    };
    ControllerPost.prototype.deletePost = function (req, res) {
        servicePost_1.default
            .deletePost(parseInt(req.params.id_Post))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao deletar um Post.'));
    };
    return ControllerPost;
}());
exports.default = new ControllerPost();
//# sourceMappingURL=controllerPost.js.map