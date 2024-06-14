const http = require('http') //requerimento do modulo http
const fs = require('fs') //requerimento do modulo file system

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)//requerimento da url
    const name = urlInfo.query.name//requerimento do name do formulario

    if (!name) {
        fs.readFile('index.html', function (err, data) {

            res.writeHead(200, { 'Content-type': 'text/html' })
            res.write(data)
            return res.end()
        })

    } else {
        fs.writeFile("arquivo.txt", name, function (err, data) {
            //se nao, criar arquivo txt com o name, vai ser mandando pra 
            //pogina home por conta do Location: '/'
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()//termino da requisição
        })
    }


})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})