import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class RequestTimeoutException extends HttpException {
  constructor(message: string = 'Request Timeout') {
    super(HttpStatus.REQUEST_TIMEOUT, message)
  }
}
