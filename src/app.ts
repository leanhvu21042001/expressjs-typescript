import express, { NextFunction, Request, Response, Router } from 'express'
import { HttpException } from './domain/exceptions/http.exception'
import { NotFoundException } from './domain/exceptions/not-found.exception'
import { HomeController } from './presentation/controllers/home.controller'
import { IBaseController } from './presentation/controllers/interfaces/controller.interfaces'
import { ENV } from './shared/env.shared'
import { showLogRoutePaths } from './shared/show-log-route-path.shared'

class Application {
  private app: express.Application
  private appRouter: Router

  constructor() {
    this.app = express()
    this.appRouter = express.Router()

    this.loadMiddleware()
    this.loadControllers()
    this.loadLastCommonsSetup()
  }

  public getApp() {
    return this.app
  }

  public getAppRouter() {
    return this.appRouter
  }

  private loadMiddleware() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true, limit: '15kb' }))
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
    // Unhandled routes
    this.app.all('*', (req: Request, _res: Response, next: NextFunction) => {
      next(new NotFoundException(`Path ${req.originalUrl} does not exist for ${req.method} method`))
    })

    // Global error middleware
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.app.use((error: any, req: Request, res: Response) => {
      let errorConverter: HttpException = new HttpException(500, 'Internal Server Error')

      if (error instanceof HttpException) {
        errorConverter = new HttpException(error.status, error.message)
      }

      // check error fs

      // check error db

      if (ENV.NODE_ENV === 'development') {
        res.status(errorConverter.status).send(errorConverter.message)
      } else {
        delete errorConverter.stack
        res.status(errorConverter.status).send(errorConverter.message)
      }
    })
  }
}

export default new Application().getApp()
