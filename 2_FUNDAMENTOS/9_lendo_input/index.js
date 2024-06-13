const readline = require("readline").createInterface({
    input: process.stdin, //input = entrada de dados
    output: process.stdout, //output = saida de dados
    //entrada e saida de dados
})

readline.question("Qual a sua linguagem preferida?: ", (language) => {
    if (language === "Python") {
        console.log('Isso nem é linguagem xD')
    }
    //language esta sendo criada aqui
    //question vai fazer a pergunta pro usuario
    else {
        console.log(`A minha linguagem preferida é: ${language}`)
    }
    readline.close()//aqui vai fechar o readline
})