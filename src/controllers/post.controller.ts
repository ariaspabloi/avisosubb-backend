import { type Request, type Response, type NextFunction } from 'express'
import { type Image, type Post } from '@prisma/client'
import postService from '../services/post.service'
import { type PostEntry } from '../types/express/index'
import { toNewPostEntry } from '../utils'
import * as storageService from '../services/storage.service'

const getAllPosts = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const posts: Post[] = await postService.getAllPosts()
    res.status(200).json(posts)
  } catch (err) {
    next(err)
  }
}

const getPostById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let id: number = 0
    if (req.params.id != null) {
      id = Number(req.params.id)
    } else if (req.user_id != null) {
      id = Number(req.user_id)
    } else {
      res.sendStatus(400)
    }
    const post: Post | null = await postService.findPostById(id)
    if (post != null) {
      res.status(200).json(post)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
}

const getPostsByUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(req.params.id)
    const posts: Post[] = await postService.getPostsByUser(id)
    res.status(200).json(posts)
  } catch (err) {
    next(err)
  }
}

const postPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const newPost: PostEntry = toNewPostEntry({ ...req.body })
    const imagesCount = req.files != null ? Number(req.files.length) : 0
    const insertedPost: any = await postService.savePost(newPost, Number(req.user_id), imagesCount)
    if (imagesCount === 0) {
      res.status(200).json(insertedPost)
    } else {
      const imagesStructure = insertedPost.images.map((i: Image) => `${i.post_id}/${i.image_id}`)
      await storageService.saveImages(imagesStructure, req.files)
      const updatesPost = await postService.updatePost(insertedPost.id, {
        ...insertedPost,
        image_id: insertedPost.images[0].image_id
      })
      res.status(200).json(updatesPost)
    }
  } catch (err) {
    next(err)
  }
}

const putPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(req.params.id)
    const newPost: PostEntry = toNewPostEntry(req.body)
    const updatedPost: Post | null = await postService.updatePost(id, newPost)
    if (updatedPost != null) {
      res.status(200).json(updatedPost)
    } else {
      res.status(400)
    }
  } catch (err) {
    next(err)
  }
}

const deletePost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = Number(req.params.id)
    const deletePost = await postService.deletePost(id)
    res.status(200).json(deletePost)
  } catch (err) {
    next(err)
  }
}

export { getAllPosts, getPostById, postPost, putPost, deletePost, getPostsByUser }
