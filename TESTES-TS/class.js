"use strict";
exports.__esModule = true;
var minhaClasse = /** @class */ (function () {
    function minhaClasse(param1, param2) {
        this.variavel3 = param1;
        this.variavel4 = param2;
    }
    minhaClasse.prototype.imprime = function (nome) {
        this.name = nome;
        console.log("Ola " + this.name + " seu parametro foi " + this.variavel3 + " status " + this.variavel4);
    };
    return minhaClasse;
}());
exports.minhaClasse = minhaClasse;
