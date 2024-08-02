const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json()); //transformar em json

app.engine("handlebars", exphbs.engine()); //executa a função
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;

  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect("/books");
  });
});

//rota pra resgatar os livros do sistema
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data; //recuperar os dados
    console.log(books);

    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const book = data[0]; //primeiro dado

    res.render("book", { book });
  });
});

const conn = mysql.createConnection({
  //conexao do banco criada mas nao esta sendo executada
  host: "localhost",
  user: "root",
  password: "sv12345",
  database: "nodemysql",
});

//a cada interação do banco, é feito a conexao
conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectou ao MySql!"); //callback pra falar que esta conecat

  app.listen(3000);
});
