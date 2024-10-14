import { ENV } from './env.shared'

export class ConsoleShared {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static handleShow(callback: any) {
    if (ENV.NODE_ENV === 'development') {
      callback?.()
    }
  }

  static dir(obj?: unknown): void {
    this.handleShow(console.dir(obj))
  }

  static error(message?: unknown): void {
    this.handleShow(console.error(message))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static log(message?: unknown, ...params: any[]): void {
    this.handleShow(console.log(message, ...params))
  }

  static warn(message?: unknown): void {
    this.handleShow(console.warn(message))
  }
}
