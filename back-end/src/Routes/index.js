import { Router } from "express";
import userRouter from "./UserRouter.js";

const routes = Router();

routes.use(userRouter);

export default routes;
