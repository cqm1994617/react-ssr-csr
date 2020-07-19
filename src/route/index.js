import React, { Suspense } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Index from '../client/pages/index'
import Home from '../client/pages/home'
import Test from '../client/pages/test'

const routes = [
  {
    key: 'index',
    path: '/',
    component: Index,
    getInitialProps: Index.getInitialProps,
    routes: [
      {
        path: '/',
        key: 'home',
        exact: true,
        component: Home,
        getInitialProps: Home.getInitialProps
      },
      {
        path: '/test',
        key: 'test',
        exact: true,
        render: () => <Test haha="自定义的props" />,
        getInitialProps: Test.getInitialProps
      }
    ]
  }
]

export default routes
