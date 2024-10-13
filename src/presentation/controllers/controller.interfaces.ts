import { Router } from 'express'

export interface IBaseController {
  initializeRoutes(appRouter: Router): void
}
