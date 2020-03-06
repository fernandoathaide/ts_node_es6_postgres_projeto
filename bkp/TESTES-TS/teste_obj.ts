//require('./class');
import { minhaClasse } from './class';
import { DiaDaSemana } from '../ts_node_es6_postgres/modelos/enums/diaSemana';

/*
    let array = [1,2,3];
    let a,b,c;

    [a,b,c] = array;
*/
//Forma reduzida
let [a,b,c] = [1,2,3];
console.log(a,b,c);

let pessoa ={
    "nome": "Fernando",
    "sobrenome": "Athaide"
};

let nome, sobrenome;
({nome, sobrenome} = pessoa);

console.log(nome, sobrenome);

var testClass = new minhaClasse("Olá Cara", true);
testClass.imprime("Fernando");

for (let dia in DiaDaSemana) {
    if (DiaDaSemana.hasOwnProperty(dia) &&
        (isNaN(parseInt(dia)))) {
        console.log(dia);
    }
}

let dia = DiaDaSemana[1]; // Segunda
let diaNumero = DiaDaSemana[dia]; // 1
let diaString= DiaDaSemana[1]; // 1

console.log(`DIA ${dia} diaNumero ${diaNumero} diaString ${diaString}`)

import { InterfaceLogin } from '../ts_node_es6_postgres/modelos/interfaces/interface_login'

export class TesteInterface implements InterfaceLogin{
    email = 'fernando@athaide';
    senha = '123456'

    getToken(): string{
        return (this.email+this.senha);
    }
}

var testeInterface = new TesteInterface();

console.log(testeInterface.getToken());