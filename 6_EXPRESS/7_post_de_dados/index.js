const express = require("express");

const app = express(); //executando o express
const port = 3000; //variavel de acordo com o ambiente mas no caso do curso deixa fixo 3000

const path = require("path"); // core module de caminho

//ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");
//render html é a base path
//esse const vai ir ao diretorio templates

app.get("/users/add", (req, res) => {
  //simplesmente envia um arquivo pro frontend
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  //sera usado essa requisição pra postar e devolver essa resposta pro usuario

  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

  res.sendFile(`${basePath}/userform.html`);
});

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
