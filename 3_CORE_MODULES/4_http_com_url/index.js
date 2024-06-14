const http = require('http') //requisitando metodo http

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)//requisitando as informações da url
    //qunado o usuario acessar
    //requisitando atraves do metodo url

    const name = urlInfo.query.name //pegando o url name e pegando o parametro atraves o query
    // e pegando o name desse url

    res.statusCode = 200 //codigo de acesso de sucesso 200
    res.setHeader('Contenty-Type', 'text/html')//setando o html 

    if (!name) {//se nao vier algum nome
        res.end(
            '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"></form>')

        //se na url nao tiver um nome,mandar um h1 pedindo para o usuário preencher
        // o form e recebe o nome na request

    } else {//se o usuario passar um nome
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})