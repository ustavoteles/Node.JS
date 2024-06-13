const chalk = require("chalk")

const nota = 9


if (nota >= 6) {
    console.log(chalk.bgGreen.black('Parabéns você esta aprovado!'))
} else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação'))
}

//chama-se o metodo chalk, o bg é a cor de fundo e black a cor do textoss