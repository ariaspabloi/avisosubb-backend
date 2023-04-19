import express, { Router } from 'express';
import { getAllUser } from '../controllers/user.controller';
const userRouter : Router = express.Router();

userRouter.get('/', getAllUser);

export default userRouter;