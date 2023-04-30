import { type User } from '@prisma/client'
import userService from '../services/user.service'

const getAllUsers = (_req: any, res: any): void => {
  userService
    .getAllUser()
    .then((users: User[]) => {
      res.status(200).json(users)
    })
    .catch((error: Error) => {
      res.status(500).json({ message: `Something went wrong. ${error.message}` })
    })
}

export { getAllUsers }
