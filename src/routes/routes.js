import { lazy } from 'react'
import { PATHS } from './paths'

export const routes = [
  {
    path: PATHS.LOGIN,
    element: lazy(async () => await import('@/pages/Auth/Login'))
  },
  {
    path: PATHS.HOME,
    layout: lazy(async () => await import('@/pages/Shared/Layout')),
    children: [
      {
        path: PATHS.HOME,
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: PATHS.COWS,
        children: [
          {
            path: '',
            element: lazy(async () => await import('@/pages/Cows'))
          },
          {
            path: ':id',
            element: lazy(async () => await import('@/pages/Cows/pages/Cow'))
          }
        ]
      }
    ]
  }
]
