import { Request, Response, Router } from 'express'
import { wrapAsync } from '~/shared/wrap-async'
import { HomeAdapter } from '../adapters/home.adapter'
import { IBaseController } from './controller.interfaces'

const root = '/home'
export class HomeController implements IBaseController {
  private getAllPostsUseCase = HomeAdapter.getGetAllPostsUseCase()
  private getAllCommentsUseCase = HomeAdapter.getGetAllCommentsUseCase()

  public initializeRoutes(appRouter: Router) {
    appRouter.get(`${root}/get-all-posts`, wrapAsync(this.getAllPosts.bind(this)))
  }

  async getAllPosts(_req: Request, res: Response): Promise<Response> {
    try {
      const posts = await this.getAllPostsUseCase.execute()
      return res.json(posts)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async getAllComments(_req: Request, res: Response): Promise<Response> {
    try {
      const comments = await this.getAllCommentsUseCase.execute()
      return res.json(comments)
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}
