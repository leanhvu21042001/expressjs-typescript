import { Request, Response, Router } from 'express'
import { catchAsync } from '~/shared/wrap-async'
import { HomeAdapter } from '../adapters/home.adapter'
import { IBaseController } from './interfaces/controller.interfaces'

const root = '/home'
export class HomeController implements IBaseController {
  private getAllPostsUseCase = HomeAdapter.getGetAllPostsUseCase()
  private getAllCommentsUseCase = HomeAdapter.getGetAllCommentsUseCase()

  public initializeRoutes(appRouter: Router) {
    appRouter.get(`${root}/get-all-posts`, catchAsync(this.getAllPosts.bind(this)))
    appRouter.get(`${root}/get-all-comments`, catchAsync(this.getAllComments.bind(this)))
  }

  async getAllPosts(_req: Request, res: Response): Promise<Response> {
    const posts = await this.getAllPostsUseCase.execute()
    return res.json(posts)
  }

  async getAllComments(_req: Request, res: Response): Promise<Response> {
    const comments = await this.getAllCommentsUseCase.execute()
    return res.json(comments)
  }
}
