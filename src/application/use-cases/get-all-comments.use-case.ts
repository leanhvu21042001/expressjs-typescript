import { PostEntity } from '~/domain/entities/post.entity'
import { ICommentRepository } from '~/domain/repositories/comment.repository.interface'

export class GetAllCommentsUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(): Promise<PostEntity[]> {
    return await this.commentRepository.findAll()
  }
}
