const http = require("http") //constante com o modulo

const port = 3000 //usuario acessando na porta 3000 acessará o servidor

const server = http.createServer((req, res) => { //(req=requerimento res=resposta)

    res.write('Oi HTTP')//escrita da resposta
    res.end()//final da resposta

})

server.listen(port, () => { //"escuta da porta"
    console.log(`Servidor rodando na porta: ${port}`)
})