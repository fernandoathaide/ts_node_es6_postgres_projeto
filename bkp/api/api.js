"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Definição inicial da nossa aplicação API de entrada.
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var errorHandlerApi_1 = require("./errorHandlerApi");
var Api = /** @class */ (function () {
    function Api() {
        this.aplicationExpress = express();
        this.middleware();
    }
    Api.prototype.middleware = function () {
        this.aplicationExpress.use(morgan('dev')); //Toda requisição feita será gerada um log no console da aplicação para acompanhamento.
        this.aplicationExpress.use(bodyParser.urlencoded({ extended: true })); // URLENCODED - Formato dos dados submetidas extended true vai ser capaz de interpretar mais informações do que o padrão.
        this.aplicationExpress.use(bodyParser.json()); //Se o que for passado for um JSON transformando em um objeto para ser tratado aqui dentro
        this.aplicationExpress.use(errorHandlerApi_1.errorHandlerApi);
        this.router(this.aplicationExpress);
    };
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
exports.default = new Api().aplicationExpress; //Devolvendo a instância da Class juntamente com a sua propriédade 'aplicationExpress'. 
