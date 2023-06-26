import { type Image } from '@prisma/client'
import prisma from '../db'
import { type ImageEntry } from '../types/express/index'

const saveImage = async (id: any): Promise<Image> => {
  const data: ImageEntry = { post_id: id }
  return await prisma.image.create({ data })
}
export default { saveImage }
