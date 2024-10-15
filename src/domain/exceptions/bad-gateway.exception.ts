import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class BadGatewayException extends HttpException {
  constructor(message: string = 'Bad Gateway') {
    super(HttpStatus.BAD_GATEWAY, message)
  }
}
