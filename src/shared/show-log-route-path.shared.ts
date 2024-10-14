import { Router } from 'express'
import { ConsoleShared } from './console.shared'

export function showLogRoutePaths(appRouter: Router) {
  appRouter.stack.forEach((route) => {
    const method = (route.route?.stack.at(0)?.method ?? '').toUpperCase()

    ConsoleShared.log(method, route.route?.path)
  })
}
