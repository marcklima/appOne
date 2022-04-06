const express = require('express');
const appServer = express();


appServer.get("/", function (req,res){
  res.send("bem vindo!");

});



appServer.listen(8181, function(erro){
  if(erro){
    console.log("CRASH!!!, erro em subir o servidor !!!")
  }else {
    console.log("UHUUU, Servidor on line !!!")
  }//fim do else

});
