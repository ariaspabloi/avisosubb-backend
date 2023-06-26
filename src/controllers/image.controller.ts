import { type Request, type Response, type NextFunction } from 'express'
import * as storageService from '../services/storage.service'

const getImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const image = await storageService.getImage(req.path)
    res.send(image.Body)
  } catch (err) {
    next(err)
  }
}

export { getImage }
