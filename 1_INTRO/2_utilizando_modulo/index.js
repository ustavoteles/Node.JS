const fs = require('fs') //file system
//geralmente se coloca em uma variável a file system

//aqui esta lendo o fs ('caminho do arquivo', 'incode do arquivo',(função anonima, e os dados))
fs.readFile('arquivo.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err)
        //se der erro imprime o erro
        return
    }
    //senao
    console.log(data)
});