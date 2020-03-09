"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function dbErrorHandler(res, error) {
    console.log("Error de Data Base: " + error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'Error-01',
        message: 'Erro de acesso a base de dados.'
    });
}
exports.dbErrorHandler = dbErrorHandler;
