import { type Request, type Response, type NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import { type JwtPayload } from '../../types'
const KEY = 'secreto'

export const authenticateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1]

    if (token == null) {
      res.status(401).json('Usuario no autenticado')
      return
    }
    const decoded = jwt.verify(token, KEY) as JwtPayload
    req.user_id = decoded.user_id
    console.log(req.user_id, decoded.user_id)
    next()
  } catch (error) {
    res.status(400).send('Token invalido')
  }
}
