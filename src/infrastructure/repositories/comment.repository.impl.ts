import { CommentEntity } from '~/domain/entities/comment.entity'
import { ICommentRepository } from '~/domain/repositories/comment.repository.interface'

export class CommentRepositoryImpl implements ICommentRepository {
  private comments: CommentEntity[] = []

  async findAll(): Promise<CommentEntity[]> {
    return this.comments
  }

  async findById(id: string): Promise<CommentEntity | null> {
    return this.comments.find((comment) => comment.id === id) || null
  }

  async create(comment: CommentEntity): Promise<CommentEntity> {
    this.comments.push(comment)
    return comment
  }

  async update(comment: CommentEntity): Promise<void> {
    const index = this.comments.findIndex((b) => b.id === comment.id)
    if (index !== -1) {
      this.comments[index] = comment
    }
  }

  async delete(id: string): Promise<void> {
    this.comments = this.comments.filter((comment) => comment.id !== id)
  }
}
