// Todo código parte do index.js

// Importar as funcionalidades do expres
const express = require('express');

const app = express();

// Rota raiz, quando chama sem barra
app.post('/users', (request, response) => {
    const params = request.query;
    return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Lucas Wantz da Motta'
  });
});

// Mandar ouvir a porta 3333
app.listen(3333);
