import express, { type Router } from 'express'
import { getAllUsers } from '../controllers/user.controller'
const userRouter: Router = express.Router()

userRouter.get('/', getAllUsers)

export default userRouter
