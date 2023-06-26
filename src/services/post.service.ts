import { type Post } from '@prisma/client'
import { type PostEntry } from '../types/express/index'
import prisma from '../db'

const savePost = async (data: PostEntry, userId: number, imagesCount: number): Promise<Post> => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { campus_id, ...restData } = data
  const campusId: number | undefined = typeof campus_id === 'number' ? campus_id : undefined

  return await prisma.post.create({
    data: {
      user: {
        connect: { id: userId }
      },
      campus: {
        connect: { id: campusId }
      },
      ...restData,
      image_id: undefined,
      images: {
        create: Array.from({ length: imagesCount }).fill({})
      }
    },
    include: { images: true }
  })
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

const getPostsByUser = async (id: number): Promise<Post[]> => {
  return await prisma.post.findMany({
    where: {
      user_id: id
    },
    include: {
      user: {
        select: { id: true, name: true, email: true, phone: true, instagram: true }
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
      },
      images: true
    }
  })
}

const updatePost = async (id: number, data: any): Promise<Post | null> => {
  return await prisma.post.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      post_date: data.post_date,
      modification_date: data.modification_date,
      expiration_date: data.expiration_date,
      status: data.status,
      price: data.price,
      campus: {
        connect: { id: data.campus_id }
      },
      image: {
        connect: { image_id: data.image_id }
      },
      images: {
        connect: data.images.map((d: { image_id: any }) => {
          return { image_id: d.image_id }
        }) // Assuming you want to create new images
      }
    },
    include: {
      user: {
        select: { id: true, name: true, email: true, phone: true, instagram: true }
      },
      images: true
    }
  })
}

const deletePost = async (id: number): Promise<Post | null> => {
  return await prisma.post.delete({
    where: { id }
  })
}

export default { savePost, getAllPosts, findPostById, updatePost, deletePost, getPostsByUser }
