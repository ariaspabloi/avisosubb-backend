import { type Post, type Image } from '@prisma/client'
export {}

declare global {
  namespace Express {
    export interface Request {
      user_id?: number
    }
  }
}
export type PostEntry = Omit<Post, 'id' | 'user_id' | 'image_id' | 'post_date' | 'modification_date'>
export type ImageEntry = Omit<Image, 'image_id'>
export interface JwtPayload {
  user_id: number
}
