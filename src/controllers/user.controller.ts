import { User } from '@prisma/client'
import userService from '../services/user.service'

const getAllUser = async (_req: any, res: any) => {
  const users: User[] = await userService.getAllUser()
  return res.status(200).json(users)
}

export { getAllUser }
