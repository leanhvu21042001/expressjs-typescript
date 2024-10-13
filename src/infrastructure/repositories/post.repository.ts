import { PostEntity } from '~/domain/entities/post.entity'
import { IPostRepository } from '~/domain/repositories/post.repository.interface'

export class PostRepository implements IPostRepository {
  private posts: PostEntity[] = []

  async findAll(): Promise<PostEntity[]> {
    return this.posts
  }

  async findById(id: string): Promise<PostEntity | null> {
    return this.posts.find((post) => post.id === id) || null
  }

  async create(post: PostEntity): Promise<PostEntity> {
    this.posts.push(post)
    return post
  }

  async update(post: PostEntity): Promise<void> {
    const index = this.posts.findIndex((b) => b.id === post.id)
    if (index !== -1) {
      this.posts[index] = post
    }
  }

  async delete(id: string): Promise<void> {
    this.posts = this.posts.filter((post) => post.id !== id)
  }
}
