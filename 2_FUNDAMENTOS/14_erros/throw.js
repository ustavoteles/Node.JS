const x = "10"

//checar se x é um número
if (!Number.isInteger(x)) {//método de validação pra saber se o número é inteiro
    throw new Error("O valor de x não é um número inteiro!")
}

console.log("Continuando o código")
//O ERRO É MOSTRAR NO CONSOLE

//O THROW NAO CONTINUA O CODIGO, ELE ENCERRA