import express from "express";

const app = express();

app.get("/users", (requiest, response) => {
  console.log("Listagem de usuários");

  // JSON
  response.json(["Gessica", "Helen", "Lucas", "Bruno"]);
});

app.listen(3333);
