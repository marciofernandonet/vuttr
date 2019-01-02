const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./database');
const VuttrRoute = require('./routes/VuttrRoute');

//console.log(mongoose.connection.readyState);

mongoose.connect(config.DB, { useNewUrlParser: true }, err => {
     if(err) console.log(`Erro ao conectar ao banco de dados: ${err}`);
     else console.log('Banco de dados conectado!');
});

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(bodyParser.raw({ type: () => true }));
app.use('/', VuttrRoute);

const port = 3000;

app.listen(port, function(){
    console.log(`Servidor rodando na porta: ${port}`);
});