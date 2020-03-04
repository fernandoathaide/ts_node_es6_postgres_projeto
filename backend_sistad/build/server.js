"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var api_1 = require("./api/api");
var errorHandlerApi_1 = require("./api/errorHandlerApi");
var config = require('./config/env/config')(); //Função de invocação imediada
var server = http.createServer(api_1.default);
var port = config.serverPort;
api_1.default.use(errorHandlerApi_1.errorHandlerApi);
server.listen(port, function () { return console.log("server running on port " + port); });
