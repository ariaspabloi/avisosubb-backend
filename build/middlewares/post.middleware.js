"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInputMiddleware = void 0;
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
const postInputMiddleware = (_req, _res, next) => {
    next();
};
exports.postInputMiddleware = postInputMiddleware;
