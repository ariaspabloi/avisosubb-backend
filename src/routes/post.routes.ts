/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Router } from 'express'
import { deletePost, getAllPosts, getPostById, postPost, putPost, getPostsByUser } from '../controllers/post.controller'
import { postInputMiddleware } from '../controllers/middlewares/post.middleware'
import { authenticateToken } from '../controllers/middlewares/auth.middleware'
import multer from 'multer'

const storage = multer.memoryStorage()
const upload = multer({ storage })
const postRouter: Router = express.Router()

postRouter.get('/', getAllPosts)
postRouter.get('/user/:id', getPostsByUser)
postRouter.get('/user', authenticateToken, getPostsByUser)
postRouter.get('/:id', getPostById)
postRouter.post('/', authenticateToken, postInputMiddleware, upload.array('images', 12), postPost)
postRouter.put('/:id', putPost)
postRouter.delete('/:id', deletePost)

export default postRouter
