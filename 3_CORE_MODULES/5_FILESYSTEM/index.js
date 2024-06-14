const http = require('http') //fazendo o requerimento do core module HTTP
const fs = require('fs')//fazendo o requerimento do core module FS - file system


const port = 3000 //definindo a porta 3000 do host

const server = http.createServer((req, res) => {
    //usando o core module http com o metodo create server
    //pra criar um servidor e criando variáveis req = requerimento / res=resposta

    fs.readFile('mensagem.html', function (err, data) {//usando o fs readfile pra ler o arquivo html mensagem
        //criando uma função anonima que tem ERR= ERRO OU DATA=DADOS DO ARQUIVO


        res.writeHead(200, { 'Content-Type': 'text/html' })

        res.write(data)//escrevendo o data que basicamente é o arquivo usando o metodo writes
        return res.end() //retorno da requisição e finalizando

    })

})

server.listen(port, () => { //fazendo o servidor voltar a resposta no console
    console.log(`Servidor rodando na porta: ${port}`)
})