import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class ForbiddenException extends HttpException {
  constructor(message: string) {
    super(HttpStatus.FORBIDDEN, message)
  }
}
