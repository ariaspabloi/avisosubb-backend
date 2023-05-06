import { type Request, type Response, type NextFunction } from 'express'
import { generateToken, validateUserCredentials } from '../services/auth.service'

const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body
    const user = await validateUserCredentials(email, password)
    if (user == null) {
      res.status(401).json({
        statusCode: 401,
        message: 'Clave o correo incorrectos'
      })
      return
    }
    const token = generateToken(user)
    res.status(200).json({
      token,
      user_id: user.id,
      email: user.email,
      name: user.name
    })
  } catch (err) {
    next(err)
  }
}

export { login }
