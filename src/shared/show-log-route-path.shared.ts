import { Router } from 'express'
import { ENV } from './env.shared'

export function showLogRoutePath(appRouter: Router) {
  if (ENV.NODE_ENV === 'development') {
    appRouter.stack.forEach((route) => {
      const method = (route.route?.stack.at(0)?.method ?? '').toUpperCase()

      console.log(method, route.route?.path)
    })
  }
}
