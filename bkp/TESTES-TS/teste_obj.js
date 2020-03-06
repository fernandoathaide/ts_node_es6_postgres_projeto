"use strict";
exports.__esModule = true;
//require('./class');
var class_1 = require("./class");
var diaSemana_1 = require("../ts_node_es6_postgres/modelos/enums/diaSemana");
/*
    let array = [1,2,3];
    let a,b,c;

    [a,b,c] = array;
*/
//Forma reduzida
var _a = [1, 2, 3], a = _a[0], b = _a[1], c = _a[2];
console.log(a, b, c);
var pessoa = {
    "nome": "Fernando",
    "sobrenome": "Athaide"
};
var nome, sobrenome;
(nome = pessoa.nome, sobrenome = pessoa.sobrenome);
console.log(nome, sobrenome);
var testClass = new class_1.minhaClasse("Olá Cara", true);
testClass.imprime("Fernando");
for (var dia_1 in diaSemana_1.DiaDaSemana) {
    if (diaSemana_1.DiaDaSemana.hasOwnProperty(dia_1) &&
        (isNaN(parseInt(dia_1)))) {
        console.log(dia_1);
    }
}
var dia = diaSemana_1.DiaDaSemana[1]; // Segunda
var diaNumero = diaSemana_1.DiaDaSemana[dia]; // 1
var diaString = diaSemana_1.DiaDaSemana[1]; // 1
console.log("DIA " + dia + " diaNumero " + diaNumero + " diaString " + diaString);
var TesteInterface = /** @class */ (function () {
    function TesteInterface() {
        this.email = 'fernando@athaide';
        this.senha = '123456';
    }
    TesteInterface.prototype.getToken = function () {
        return (this.email + this.senha);
    };
    return TesteInterface;
}());
exports.TesteInterface = TesteInterface;
var testeInterface = new TesteInterface();
console.log(testeInterface.getToken());
