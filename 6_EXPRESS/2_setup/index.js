import express from "express"

const app = express() //executando o express
const port = 3000 //variavel de acordo com o ambiente mas no caso do curso deixa fixo 3000


app.get('/', (req, res) => {
    res.send('Ola mundo!!')//res do express pra enviar ao usuario (res=response)
})
//vai vim todos os dados atraves da requisição
// / é a rota principal
//método get do express (nesse caso o metodo get representa o http)


app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
    //apenas um console.log pra quem tiver vendo no terminal ver que o codigo esta rodando
})//precisa do listen com a porta