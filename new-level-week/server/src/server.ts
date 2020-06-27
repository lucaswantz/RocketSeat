import express from "express";
import routes from "./routes";

const app = express();

// Indica para entender o corpo da requisição em formato JSON
app.use(express.json());
app.use(routes);

app.listen(3333);
