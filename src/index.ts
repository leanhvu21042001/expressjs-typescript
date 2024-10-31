import http from 'http'
import app from './app'
import { ConsoleShared } from './shared/console.shared'
import { ENV } from './shared/env.shared'

const port = normalizePort(process.env.PORT || '1412')
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val: string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) return val

  if (port >= 0) return port

  return false
}

function onError(error: { syscall: string; code: string }) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      ConsoleShared.error(bind + ' requires elevated privileges')
      return process.exit(1)
    case 'EADDRINUSE':
      ConsoleShared.error(bind + ' is already in use')
      return process.exit(1)
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()

  if (addr === null) {
    throw new Error('Server is not listening yet.')
  }

  if (ENV.NODE_ENV === 'development') {
    ConsoleShared.log(`SERVER URL: http://localhost:${port}`)
    ConsoleShared.log(`Server is running on [${ENV.NODE_ENV}] mode`)
  }
}
