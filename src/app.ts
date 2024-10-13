import express, { Router } from 'express'
import { IBaseController } from './presentation/controllers/controller.interfaces'
import { HomeController } from './presentation/controllers/home.controller'
import { showLogRoutePath } from './shared/show-log-route-path.shared'

class Application {
  private app: express.Application
  private appRouter: Router

  constructor() {
    this.app = express()
    this.appRouter = express.Router()

    this.loadMiddlewares()
    this.loadControllers()
  }

  public getApp() {
    return this.app
  }

  private loadMiddlewares() {
    const middlewares: [] = []

    middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }

  private loadControllers() {
    const controllers: IBaseController[] = [new HomeController()]

    controllers.forEach((controller) => {
      controller.initializeRoutes(this.appRouter)
    })

    showLogRoutePath(this.appRouter)
  }
}

export default new Application().getApp()
