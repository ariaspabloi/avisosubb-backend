/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Router } from 'express'
import { deletePost, getAllPosts, getPostById, postPost, putPost } from '../controllers/post.controller'
import { postInputMiddleware } from '../middlewares/post.middleware'
const postRouter: Router = express.Router()

postRouter.get('/', getAllPosts)
postRouter.get('/:id', getPostById)
postRouter.post('/', postInputMiddleware, postPost)
postRouter.put('/:id', putPost)
postRouter.delete('/:id', deletePost)

export default postRouter
