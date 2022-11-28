import UserService from "../Services/UserService.js";

export default class UsersController {
  constructor() {}

  async SignUp(req, res) {
    try {
      const { username, avatar } = req.body;
      await new UserService().SignUp(username, avatar);
      res.sendStatus(201);
    } catch (error) {
      console.log("erro");
      res.sendStatus(500);
    }
  }
}
