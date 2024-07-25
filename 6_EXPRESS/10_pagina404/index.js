const express = require("express");

const app = express(); //executando o express
const port = 3000; //variavel de acordo com o ambiente mas no caso do curso deixa fixo 3000

const path = require("path"); // core module de caminho
const users = require("./users"); //nome unico pra rotas
//ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//arquivos estáticos
app.use(express.static("public")); //public é o nome da paste aonde irá ficar

const basePath = path.join(__dirname, "templates");
//render html é a base path
//esse const vai ir ao diretorio templates

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`); //res.sendFile envia a resposta do arquivo
  //basePath é a templates
});
//vai vim todos os dados atraves da requisição
// / é a rota principal
//método get do express (nesse caso o metodo get representa o http)

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`); //muda o status da requisição E MANDA O ARQUIVO 404.HTML COMO DIRETORIO
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
  //apenas um console.log pra quem tiver vendo no terminal ver que o codigo esta rodando
}); //precisa do listen com a porta
