const meuModulo = require('./meu_modulo');//fazendo o requerimento
const soma = meuModulo.soma;//aqui foi criado a variave junto com o modulo

soma(2, 3);
soma(5, 10);


meuModulo.soma(10, 10)//forma desnecessaria, toda vez que imprimir
//terá que repetir

//jogando o node .\index.js
//ele vai somar