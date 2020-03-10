"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = __importStar(require("http-status"));
function dbErrorHandler(res, error) {
    console.log("Error de Data Base: " + error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'Error-01',
        message: 'Erro de acesso a base de dados.'
    });
}
exports.dbErrorHandler = dbErrorHandler;
