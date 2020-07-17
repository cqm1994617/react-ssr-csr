import React, { Suspense } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Index from '../client/pages/index'
import Home from '../client/pages/home'
import Test from '../client/pages/test'

const routes = [
  {
    component: Index,
    routes: [
      {
        path: '/',
        key: 'home',
        exact: true,
        component: Home
      },
      {
        path: '/test',
        key: 'test',
        exact: true,
        component: Test
      }
    ]
  }
]

export default routes
