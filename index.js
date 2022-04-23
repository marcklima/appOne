
const express = require('express');
const appServer = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Quest = require("./database/Quest");
const Resposta = require("./database/Resposta");

connection
  .authenticate()
  .then(() => {
    console.log("bd conectado")
  })
  .catch((msgErro) => {
    console.log(msgErro);
  })
//chamada para o express usar o EJS com view egine
appServer.set('view engine', 'ejs'); // renderizador de html será o ejs
appServer.use(express.static('public'));
//body parser
appServer.use(bodyParser.urlencoded({ extended: false })); //responsavel para receber e traduzir o envior do metodo post
appServer.use(bodyParser.json());
//rotas

appServer.get("/", (req, res) => {
  var nome = "Marcelo Lima";
  var lang = "Java Script";

  res.render('index', {
    nome: nome,
    empresa: "Baináu",
    lang: lang,
    inscritos: 8040
  })

});//fim

//start
appServer.get('/quest', (req, res) => {
  res.render('quest');
});//fim 


//start
appServer.post('/savequest', (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Quest.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  })
  });//fim



  appServer.listen(8181, function (erro) {
    if (erro) {
      console.log("CRASH!!!, erro em subir o servidor !!!")
    } else {
      console.log("UHUUU, Servidor on line !!!")
    }//fim do else

  });