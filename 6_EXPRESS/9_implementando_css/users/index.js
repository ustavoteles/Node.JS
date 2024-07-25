const express = require("express");
const router = express.Router(); //chamando o router pra pegar as rotas
const path = require("path"); // core module de caminho

const basePath = path.join(__dirname, "../templates"); // dois pontos pra voltar pra pasta templates

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const age = req.body.age;

  console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

  res.sendFile(`${basePath}/userform.html`);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  //leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos busncado pelo usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});

module.exports = router; //exportar o router
