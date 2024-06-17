const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)//assim que importa quando ja foi requerido la em cima 
    const fileName = q.pathname.substring(1)
    //caminho do arquivo
    //substring (1) vai pegar o nome do caminho, O 1 VAI PEGAR DEPOIS DO 0
    // A PARTIR DO ZERO É  O BARRA, OU SEJA VAI PEGAR DEPOIS DO BARRA 


    //const q = require('url').parse(req.url, true) 
    //query da url
    //da pra fazer o requerimento la em cima mas como vai ser usado somente essa hora 
    //entao é feito embaixo do createserver


    if (fileName.includes('html')) {//esta perguntando se o filename tem html incluso

        if (fs.existsSync(fileName)) {//se o arquivo existe(de forma sincrona)
            fs.readFile(fileName, function (err, data) {//le o arquivo
                res.writeHead(200, { 'Content-Type': 'text/html' })//escreve em html
                res.write(data)//mostra o arquivo
                return res.end//termino da resposta
            })
        } else { //pagina 404(nao existe)
            fs.readFile('404.html', function (err, data) {//le o arquivo
                res.writeHead(404, { 'Content-Type': 'text/html' })//codigo 404
                res.write(data)//mostra o arquivo
                return res.end//termino da resposta
            })
        }
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})