import { Request, Response, NextFunction } from 'express'

export const contentType = (req: Request, res: Response, next: NextFunction): void => {
  res.set('json')
  next()
}
