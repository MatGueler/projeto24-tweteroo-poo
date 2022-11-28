import { tweets, usuarios } from "../Database/Database.js";

export default class TweetsService {
  constructor() {}

  async CreateTweet(tweet, username) {
    if (!username || !tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }
    const { avatar } = usuarios.find((user) => user.username === username);
    tweets.push({ username, tweet, avatar });
  }

  async GetUserTweet(username) {
    const tweetsDoUsuario = tweets.filter((t) => t.username === username);
    return tweetsDoUsuario;
  }

  async CreateTweet(tweet, username) {
    if (!username || !tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }
    const { avatar } = usuarios.find((user) => user.username === username);
    tweets.push({ username, tweet, avatar });
  }
}
