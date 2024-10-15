import debug from 'debug'
import http from 'http'
import app from './app'
import { ConsoleShared } from './shared/console.shared'
import { ENV } from './shared/env.shared'
const debugServer = debug('api:server')

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '1412')
app.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception: ', err.message)
  console.log('Closing server now...')
  process.exit(1)
})

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

process.on('unhandledRejection', (err) => {
  console.log(err)
  console.log('Closing server now...')
  server.close(() => {
    process.exit(1)
  })
})

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully')
  server.close(() => {
    console.log('Closed out remaining connections')
    process.exit(0)
  })
})

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) return val

  if (port >= 0) return port

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: string }) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()

  if (addr === null) {
    throw new Error('Server is not listening yet.')
  }

  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debugServer('Listening on ' + bind)

  if (ENV.NODE_ENV === 'development') {
    ConsoleShared.log(`SERVER URL: http://localhost:${port}`)
    ConsoleShared.log(`Server is running on [${ENV.NODE_ENV}] mode`)
  }
}
