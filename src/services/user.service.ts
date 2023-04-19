import { User } from '@prisma/client'
import prisma from '../db'

const getAllUser = async (): Promise<User[]> => {
  return await prisma.user.findMany()
}

export default { getAllUser }
