import { type Post } from '@prisma/client'

export interface CreatePostInput extends Omit<Post, 'id' | 'createdAt' | 'author'> {}
