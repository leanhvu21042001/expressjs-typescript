import { PostEntity } from '../entities/post.entity'

export interface IPostRepository {
  findAll(): Promise<PostEntity[]>
  findById(id: string): Promise<PostEntity | null>
  create(post: PostEntity): Promise<PostEntity>
  update(post: PostEntity): Promise<void>
  delete(id: string): Promise<void>
}
