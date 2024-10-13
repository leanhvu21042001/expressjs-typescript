import { GetAllCommentsUseCase } from '~/application/use-cases/get-all-comments.use-case'
import { GetAllPostsUseCase } from '~/application/use-cases/get-all-posts.use-case'
import { CommentRepository } from '~/infrastructure/repositories/comment.repository'
import { PostRepository } from '~/infrastructure/repositories/post.repository'

export class HomeAdapter {
  private static _postRepository = new PostRepository()
  private static _commentRepository = new CommentRepository()

  static getPostRepository() {
    return this._postRepository
  }

  static getCommentRepository() {
    return this._commentRepository
  }

  static getGetAllPostsUseCase() {
    return new GetAllPostsUseCase(this.getPostRepository())
  }

  static getGetAllCommentsUseCase() {
    return new GetAllCommentsUseCase(this.getCommentRepository())
  }
}
