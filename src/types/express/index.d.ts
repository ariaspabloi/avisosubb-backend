// eslint-disable-next-line @typescript-eslint/no-unused-vars
/*
import { Express } from 'express-serve-static-core'

declare module 'express-serve-static-core' {
  interface Request {
    user_id: number
  }
}
*/
export {}

declare global {
  namespace Express {
    export interface Request {
      user_id?: number
    }
  }
}
