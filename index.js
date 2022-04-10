const express = require('express');
const appServer = express();
const bodyParser = require('body-parser');

appServer.set('view engine', 'ejs'); // renderizador de html será o ejs
appServer.use(express.static('public'));

appServer.use(bodyParser.urlencoded({extended:false})); //responsavel para receber e traduzir o envior do metodo post
appServer.use(bodyParser.json());




//start
appServer.get('/quest', (req, res) => {
  res.render('quest');
});//fim 


//start
appServer.post('savequest', (req, res) => {
  res.send("Formulário Recebido, Título: " + titulo +" Descrição:  "+ descricao);
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
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

appServer.listen(8181, function (erro) {
  if (erro) {
    console.log("CRASH!!!, erro em subir o servidor !!!")
  } else {
    console.log("UHUUU, Servidor on line !!!")
  }//fim do else

});
