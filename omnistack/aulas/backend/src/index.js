// Importar as funcionalidades do expres
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

// Mandar ouvir a porta 3333
app.listen(3333);
