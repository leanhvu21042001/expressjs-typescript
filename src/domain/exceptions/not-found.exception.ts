import { HttpStatus } from '../enums'
import { HttpException } from './http.exception'

export class NotFoundException extends HttpException {
  constructor(message: string = 'Not Found') {
    super(message, HttpStatus.NOT_FOUND)
  }
}
