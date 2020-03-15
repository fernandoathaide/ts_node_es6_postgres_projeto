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
var serviceAuthor_1 = __importDefault(require("./serviceAuthor"));
var handlers_1 = __importDefault(require("../../api/responses/handlers"));
var ControllerAuthor = (function () {
    function ControllerAuthor() {
    }
    ControllerAuthor.prototype.getAllAuthor = function (req, res) {
        serviceAuthor_1.default
            .getAllAuthor()
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar todos os Autores.'));
    };
    ControllerAuthor.prototype.createAuthor = function (req, res) {
        serviceAuthor_1.default
            .createAuthor(req.body)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao criar Author.'));
    };
    ControllerAuthor.prototype.getAuthorById = function (req, res) {
        serviceAuthor_1.default
            .getAuthorById(parseInt(req.params.id_author))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao buscar um Author por ID.'));
    };
    ControllerAuthor.prototype.updateAuthor = function (req, res) {
        var id_author = parseInt(req.params.id_author);
        var props = req.body;
        serviceAuthor_1.default
            .updateAuthor(id_author, props)
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.dbErrorHandler, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao alterar o Author.'));
    };
    ControllerAuthor.prototype.deleteAuthor = function (req, res) {
        serviceAuthor_1.default
            .deleteAuthor(parseInt(req.params.id_author))
            .then(_.partial(handlers_1.default.onSuccess, res))
            .catch(_.partial(handlers_1.default.onError, res, 'Erro ao deletar um Author.'));
    };
    return ControllerAuthor;
}());
exports.default = new ControllerAuthor();
