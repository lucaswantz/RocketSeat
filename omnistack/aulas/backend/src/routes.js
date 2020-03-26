const express = require("express");
const routes = express.Router();

// Rota raiz, quando chama sem barra
routes.post("/users", (request, response) => {
  const body = request.body;

  console.log(body);

  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Lucas Wantz da Motta"
  });
});

module.exports = routes;
