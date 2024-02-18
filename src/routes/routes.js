import { lazy } from 'react'

export const routes = [
  {
    path: 'login',
    element: lazy(async () => await import('@/pages/Auth/Login'))
  },
  {
    path: '',
    layout: lazy(async () => await import('@/pages/Shared/Layout')),
    children: [
      {
        path: '',
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: 'cows',
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
