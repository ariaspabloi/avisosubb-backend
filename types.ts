import { type Post } from '@prisma/client'
export type PostEntry = Omit<Post, 'id' | 'post_date' | 'modification_date'>
