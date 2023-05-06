import { type User } from '@prisma/client'
import userService from './user.service'
import * as jwt from 'jsonwebtoken'
const KEY = 'secreto'

const validateUserCredentials = async (email: string, password: string): Promise<User | null> => {
  const existingUser = await userService.findUserByEmail(email)
  if (existingUser === null || existingUser.password !== password) {
    return null
  }
  return existingUser
}

const generateToken = (user: User): string => {
  return jwt.sign(
    {
      user_id: user.id,
      email: user.email,
      name: user.name
    },
    KEY
  )
}

export { validateUserCredentials, generateToken }
