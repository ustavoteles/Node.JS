const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {//se o diretorio "" NÃO existe de forma sincrona

    console.log('Não existe')
    fs.mkdirSync("minhapasta") // cria o diretorio
} else if (fs.existsSync('./minhapasta')) {//se o diretorio "" existe de forma sincrona
    console.log('A pasta já existe!!!!!!')
}



