import { tweets, usuarios } from "../Database/Database.js";

export default class TweetsService {
  constructor() {}

  async CreateTweet(tweet, username) {
    if (!username || !tweet) {
      throw new Error("Todos os campos são obrigatórios!", { statusCode: 400 });
    }
    const { avatar } = usuarios.find((user) => user.username === username);
    tweets.push({ username, tweet, avatar });
  }

  async GetUserTweet(username) {
    const tweetsDoUsuario = tweets.filter((t) => t.username === username);
    return tweetsDoUsuario;
  }

  async GetTweets(page) {
    if (page && page < 1) {
      throw new Error("Informe uma página válida!", { statusCode: 400 });
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;
    if (tweets.length <= 10) {
      return this.reverseTweets();
    }
    return [...tweets].reverse().slice(start, end);
  }

  reverseTweets() {
    return [...tweets].reverse();
  }
}
