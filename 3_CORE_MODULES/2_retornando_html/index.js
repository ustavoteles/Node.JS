const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200 //codigo de acesso de sucesso 200
    res.setHeader('Contenty-Type', 'text/html')//setando o html 
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1><p></p>')//devolvendo esse texto em html pro usuario
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})