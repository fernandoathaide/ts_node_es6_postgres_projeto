"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function onError(res, msn, error) {
    console.log("Error Interno do Server: " + error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(msn);
}
exports.onError = onError;
