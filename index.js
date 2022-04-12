const express = require('express');
const appServer = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Quest = require("./database/Quest")


connection
  .authenticate()
  .then(() =>{
    console.log("bd conectado")
  })
  .catch((msgErro) =>{
    console.log(msgErro);
  } )

appServer.set('view engine', 'ejs'); // renderizador de html será o ejs
appServer.use(express.static('public'));

appServer.use(bodyParser.urlencoded({extended:false})); //responsavel para receber e traduzir o envior do metodo post
appServer.use(bodyParser.json());




//start
appServer.get('/quest', (req, res) => {
  res.render('quest');
});//fim 


//start
appServer.get("/", (req, res) => {
  var nome = "Marcelo Lima";
  var lang = "Java Script";

  res.render('index', {
    nome: nome,
    empresa: "Baináu",
    lang: lang,
    insvritos: 8040
  })

});//fim

/*
appServer.get("/", function (req,res){
  res.send("OI, Seja bem vindo!");
});


appServer.get("/canal/youtube", function(req, res){
  const canal = req.query["canal"];
  if (canal){
    res.send("<h1> Bem Vindo ao site !! ! </h1>By <h2>")
}else {
  res.send("<h3>Site não recebeu parametros<p> tente novamente</h3>")
}
});


appServer.get("/home/:nome?", function(req,res){
var nome = req.params.nome;

  if (nome){
    res.send("<h1> Hello "+nome+" Seja Bem vindo!!!</h1>")

  }else {
    res.send("<h1>Bem vindo ao Blog Baináu")
  }
});

*/
//start
appServer.post('/savequest', (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Quest.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  
});//fim



appServer.listen(8181, function (erro) {
  if (erro) {
    console.log("CRASH!!!, erro em subir o servidor !!!")
  } else {
    console.log("UHUUU, Servidor on line !!!")
  }//fim do else

});
