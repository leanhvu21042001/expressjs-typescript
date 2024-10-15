import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class ConflictException extends HttpException {
  constructor(message: string) {
    super(HttpStatus.CONFLICT, message)
  }
}
