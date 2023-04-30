import { type Request, type Response } from 'express'
import { type Post } from '@prisma/client'
import postService from '../services/post.service'
import { type PostEntry } from '../../types'
import { toNewPostEntry } from '../utils'

const getAllPosts = async (_req: Request, res: Response): Promise<void> => {
  const posts: Post[] = await postService.getAllPosts()
  res.status(200).json(posts)
}

const getPostById = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  const post: Post | null = await postService.findPostById(id)
  if (post != null) {
    res.status(200).json(post)
  } else {
    res.sendStatus(404)
  }
}

const postPost = async (req: Request, res: Response): Promise<void> => {
  const newPost: PostEntry = toNewPostEntry(req.body)
  const insertedPost: Post = await postService.savePost(newPost)
  res.status(200).json(insertedPost)
}

const putPost = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  const newPost: PostEntry = toNewPostEntry(req.body)
  const updatedPost: Post | null = await postService.updatePost(id, newPost)
  if (updatedPost != null) {
    res.status(200).json(updatedPost)
  } else {
    res.status(400)
  }
}

const deletePost = async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id)
  const deletePost = await postService.deletePost(id)
  res.status(200).json(deletePost)
}

export { getAllPosts, getPostById, postPost, putPost, deletePost }
