import { CommentEntity } from '../entities/comment.entity'

export interface ICommentRepository {
  findAll(): Promise<CommentEntity[]>
  findById(id: string): Promise<CommentEntity | null>
  create(post: CommentEntity): Promise<CommentEntity>
  update(post: CommentEntity): Promise<void>
  delete(id: string): Promise<void>
}
