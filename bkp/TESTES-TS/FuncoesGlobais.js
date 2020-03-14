(function(global){
    var soma = function(a,b){ return a+b; }
    var subtracao = function(a,b){ return a-b; }
    var multiplicacao = function(a,b){ return a*b; }
    var divisao = function(a,b){ return a/b; }

    var operacoes = {
        sum: function(a,b){ return soma(a,b); },
        sub: function(a,b){ return subtracao(a,b); },
        mul: function(a,b){ return multiplicacao(a,b); },
        div: function(a,b){ return divisao(a,b); }
    }
    global.operacoes = operacoes;
    
})(global)

console.log(operacoes.sum(2,3));