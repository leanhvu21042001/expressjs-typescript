import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class BadRequestException extends HttpException {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message)
  }
}
