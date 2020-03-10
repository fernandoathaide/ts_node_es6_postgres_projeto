"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var jwt = require("jwt-simple");
// import * as bcrypt from 'bcrypt';
var config = require('../../config/env/config')();
function authSuccess(res, credentials, data) {
    var isMatch = (credentials.password == data.password);
    if (isMatch) {
        var payload = { id_user: data.id_user };
        res.json({
            token: jwt.encode(payload, config.secret)
        });
    }
    else {
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
}
exports.default = authSuccess;
