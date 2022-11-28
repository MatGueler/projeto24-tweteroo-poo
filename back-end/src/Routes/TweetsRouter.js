import { Router } from "express";
import TweetsController from "../Controllers/TweetsController.js";

const tweetRouter = Router();

tweetRouter
  .post("/tweets", (req, res) => new TweetsController().CreateTweet(req, res))
  .get("/tweets", (req, res) => new TweetsController().GetTweets(req, res))
  .get("/tweets/:username", (req, res) =>
    new TweetsController().GetUserTweet(req, res)
  );

export default tweetRouter;
