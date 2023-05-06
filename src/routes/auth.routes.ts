/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Router } from 'express'
import { login } from '../controllers/auth.controller'
const authRouter: Router = express.Router()

authRouter.post('/login', login)

export default authRouter
