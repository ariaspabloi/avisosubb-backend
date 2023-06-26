/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Router } from 'express'
import { getImage } from '../controllers/image.controller'
const imageRouter: Router = express.Router()

imageRouter.get('/*', getImage)

export default imageRouter
