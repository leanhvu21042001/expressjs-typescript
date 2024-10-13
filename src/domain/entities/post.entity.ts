export class PostEntity {
  public readonly id: string
  public title: string
  public content: string
  public author: string
  public publishedDate: Date

  constructor(props: PostEntity) {
    this.id = props.id
    this.title = props.title
    this.content = props.content
    this.author = props.author
    this.publishedDate = props.publishedDate
  }
}
