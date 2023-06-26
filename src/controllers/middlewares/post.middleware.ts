import { type Request, type Response, type NextFunction } from 'express'
/*
import Ajv from 'ajv/dist/jtd'
import { CreatePostInput } from '../schema_definition'
const ajv = new Ajv()
const validate = ajv.compile(CreatePostInput)

export const postInputMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const isValid = validate(req.body)
  console.log(isValid, req.body)

  if (!isValid) {
    return res.status(400).json({
      error: 'Invalid request body',
      details: validate.errors
    })
  }

  next()
  return
}
*/

export const postInputMiddleware = (_req: Request, _res: Response, next: NextFunction): void => {
  next()
}
