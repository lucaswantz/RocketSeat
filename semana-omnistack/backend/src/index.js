const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());

// Se estivesse em produção e fosse permitido acessar apenas do site principal
// app.use(
//   cors({
//     origin: "http://meuapp.com"
//   })
// );

app.use(express.json());
app.use(routes);

app.listen(3333);
