import { type Post } from '@prisma/client'
import { type PostEntry } from '../../types'
import prisma from '../db'

const savePost = async (data: PostEntry): Promise<Post> => {
  return await prisma.post.create({ data })
}

const getAllPosts = async (): Promise<Post[]> => {
  return await prisma.post.findMany({
    where: { status: true },
    include: {
      user: {
        select: { id: true, name: true }
      }
    }
  })
}

const findPostById = async (id: number): Promise<Post | null> => {
  return await prisma.post.findUnique({
    where: {
      id
    },
    include: {
      user: {
        select: { id: true, name: true, email: true, phone: true, instagram: true }
      }
    }
  })
}

const updatePost = async (id: number, data: PostEntry): Promise<Post | null> => {
  return await prisma.post.update({
    where: { id },
    data
  })
}

const deletePost = async (id: number): Promise<Post | null> => {
  return await prisma.post.delete({
    where: { id }
  })
}

export default { savePost, getAllPosts, findPostById, updatePost, deletePost }
