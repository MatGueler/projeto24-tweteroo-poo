import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";

import routes from "./src/Routes/index.js";

const app = express();

app.use(cors());
app.use(json());

app.use(routes);

app.listen(5001, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
