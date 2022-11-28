import { Router } from "express";
import tweetRouter from "./TweetsRouter.js";
import userRouter from "./UserRouter.js";

const routes = Router();

routes.use(userRouter);
routes.use(tweetRouter);

export default routes;
