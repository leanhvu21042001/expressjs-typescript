import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class UnauthorizedException extends HttpException {
  constructor(message: string = 'Unauthorized') {
    super(HttpStatus.UNAUTHORIZED, message)
  }
}
