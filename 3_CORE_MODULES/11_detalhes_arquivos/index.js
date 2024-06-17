const fs = require('fs')

//fs.stat('novoarquivo.txt', (err, stats) => { //função stat pra ver status do arquivo
fs.stat('pasta', (err, stats) => { //função stat pra ver status do arquivo
    if (err) {
        console.log(err)
        return
    }

    console.log(stats.isFile())//stats.isFile pergunta se é um arquivo
    console.log(stats.isDirectory())//stats.isDirectory pergunta se é um diretório
    console.log(stats.isSymbolicLink())
    //stats.isSymbolicLink pergunta se é um link simbolico
    //tem mais no linux, se é um atalho
    console.log(stats.ctime)//c time é a data de criaçao
    console.log(stats.size)//size = tamanho do arquivo
})