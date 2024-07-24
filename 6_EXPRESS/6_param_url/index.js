const express = require("express");

const app = express(); //executando o express
const port = 3000; //variavel de acordo com o ambiente mas no caso do curso deixa fixo 3000

const path = require("path"); // core module de caminho

const basePath = path.join(__dirname, "templates");
//render html é a base path
//esse const vai ir ao diretorio templates

app.get("/users/:id", (req, res) => {
  //criando uma nova rota. anteriormente da barra

  const id = req.params.id;

  //leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos busncado pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`); //res.sendFile envia a resposta do arquivo
  //basePath é a templates
});
//vai vim todos os dados atraves da requisição
// / é a rota principal
//método get do express (nesse caso o metodo get representa o http)

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
  //apenas um console.log pra quem tiver vendo no terminal ver que o codigo esta rodando
}); //precisa do listen com a porta
