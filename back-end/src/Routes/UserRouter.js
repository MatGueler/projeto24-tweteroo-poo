import { Router } from "express";
import UsersController from "../Controllers/UsersController.js";

const userRouter = Router();

userRouter.post("/sign-up", (req,res) => new UsersController().SignUp(req,res));

export default userRouter;
