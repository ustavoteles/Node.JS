const fs = require('fs')//chamando o file system

fs.unlink('arquivo.txt', function (err) {//usando o método UNLINK //so possui o argumento de erro

    if (err) {
        console.log(err)
        return
        //CASO NAO EXISTA ARQUIVO, RETORNA MENSAGEM DE ERRO
    }

    console.log('ARQUIVO REMOVIDO!')


})