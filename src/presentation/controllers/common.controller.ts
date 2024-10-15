import { Router } from 'express'
import { IBaseController } from './interfaces/controller.interfaces'

const root = '/commons'
export class CommonController implements IBaseController {
  public initializeRoutes(appRouter: Router) {
    appRouter.get(`${root}/common/check-health`)
  }
}
