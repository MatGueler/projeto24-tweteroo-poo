import { usuarios } from "../Database/Database.js";

export default class UserService {
  constructor() {}

  async SignUp(username, avatar) {
    if (!username || !avatar) {
      res.status(400).send("Todos os campos são obrigatórios!");
      return;
    }
    usuarios.push({ username, avatar });
  }
}
