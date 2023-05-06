import { type User } from '@prisma/client'
import prisma from '../db'

const getAllUser = async (): Promise<User[]> => {
  return await prisma.user.findMany()
}

const findUserByEmail = async (email: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}

export default { getAllUser, findUserByEmail }
