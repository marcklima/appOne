//model do db
const sequelize = require('sequelize');
const connection = require("./database");

const Quest = connection.define('pergunta',{ 
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },//fim titulo
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
    }  //fim descrição  
});
Quest.sync({force: false}).then(()=>{});

module.exports = Quest;