const fs = require("fs")//requerimento FileSystem, modulo que mexe com Arquivos

console.log("Inicio")

fs.writeFile("arquivo2.txt", "oi", function (err) {
    setTimeout(function () {
        console.log("Arquivo criado")
    }), 1000
})
//aqui sera criado o arquivo2.txt depois de 1000 milesimos,
//foi usado o setTimeOut

//BEM MAIS FLUIDO.

//ou seja, o assincrono ele continuou o codigo e logo após criou o arquivo
console.log('Fim')
//perceba que ele n possui o Sync igual o último exemplo, ou seja, É ASSINCRONO