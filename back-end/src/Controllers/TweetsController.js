import TweetsService from "../Services/TweetsService.js";

export default class TweetsController {
  constructor() {}

  async CreateTweet(req, res) {
    try {
      const { tweet, username } = req.body;

      await new TweetsService().CreateTweet(tweet, username);

      res.status(201).send("OK, seu tweet foi criado");
    } catch (error) {
      console.log("erro");
      res.sendStatus(500);
    }
  }

  async GetUserTweet(req, res) {
    try {
      const { username } = req.params;

      const userTweets = await new TweetsService().GetUserTweet(username);

      res.status(200).send(userTweets);
    } catch (error) {
      console.log("erro");
      res.sendStatus(500);
    }
  }

  async GetTweets(req, res) {
    try {
      const { page } = req.query;
      const tweets = await new TweetsService().GetTweets(page);
      res.status(200).send(tweets);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
