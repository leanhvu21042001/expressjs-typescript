import { GetAllCommentsUseCase } from '~/application/use-cases/get-all-comments.use-case'
import { GetAllPostsUseCase } from '~/application/use-cases/get-all-posts.use-case'
import { CommentRepositoryImpl } from '~/infrastructure/repositories/comment.repository.impl'
import { PostRepositoryImpl } from '~/infrastructure/repositories/post.repository.impl'

export class HomeAdapter {
  private static _postRepository = new PostRepositoryImpl()
  private static _commentRepository = new CommentRepositoryImpl()

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
