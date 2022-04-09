const express = require('express');
const appServer = express();


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



appServer.listen(8181, function(erro){
  if(erro){
    console.log("CRASH!!!, erro em subir o servidor !!!")
  }else {
    console.log("UHUUU, Servidor on line !!!")
  }//fim do else

});
