import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class InternalServerErrorException extends HttpException {
  constructor(message: string = 'Internal Server Error') {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
