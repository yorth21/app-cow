import { lazy } from 'react'

export const routes = [
  {
    layout: lazy(async () => await import('../layouts/AppLayout')),
    children: [
      {
        path: '/',
        element: lazy(async () => await import('../pages/Home'))
      },
      {
        path: '/cows',
        element: lazy(async () => await import('../pages/Home'))
      }
    ]
  }
]
