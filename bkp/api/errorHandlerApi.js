"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.error("API error handler foi executado: " + err);
    res.status(500).json({
        errorCode: 'Err-001',
        message: 'Erro Interno do Servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
