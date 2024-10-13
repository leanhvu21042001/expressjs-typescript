import { PostEntity } from '~/domain/entities/post.entity'
import { IPostRepository } from '~/domain/repositories/post.repository.interface'

export class GetAllPostsUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(): Promise<PostEntity[]> {
    return await this.postRepository.findAll()
  }
}
