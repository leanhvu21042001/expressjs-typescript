import { NextFunction, Request, Response } from 'express'

export function catchAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}
