import express, { Router } from 'express'
import { HttpStatus } from './domain/enums'
import { HttpException } from './domain/exceptions/http.exception'
import { IBaseController } from './presentation/controllers/controller.interfaces'
import { HomeController } from './presentation/controllers/home.controller'
import { showLogRoutePaths } from './shared/show-log-route-path.shared'

class Application {
  private app: express.Application
  private appRouter: Router

  constructor() {
    this.app = express()
    this.appRouter = express.Router()

    this.loadMiddlewares()
    this.loadControllers()
    this.loadLastCommonsSetup()
  }

  public getApp() {
    return this.app
  }

  public getAppRouter() {
    return this.appRouter
  }

  private loadMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(this.appRouter)
  }

  private loadControllers() {
    const controllers: IBaseController[] = [new HomeController()]

    controllers.forEach((controller: IBaseController) => {
      controller.initializeRoutes(this.appRouter)
    })
  }

  private loadLastCommonsSetup() {
    showLogRoutePaths(this.appRouter)
    this.handleException()
  }

  private handleException() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.app.use(function (error: any, _req: express.Request, res: express.Response) {
      if (error instanceof HttpException) {
        res.status(error.status).send(error)
      } else {
        res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .send(new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR))
      }
    })
  }
}

export default new Application().getApp()
