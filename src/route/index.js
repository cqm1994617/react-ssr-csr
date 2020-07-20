import React from 'react'
import Index from '../client/pages/index'
import Home from '../client/pages/home'
import SSRList from '../client/pages/ssr-list'
import CSRList from '../client/pages/csr-list'

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
        path: '/ssr-list',
        key: 'ssr-list',
        exact: true,
        render: () => <SSRList title="页面_SSRList" />,
        getInitialProps: SSRList.getInitialProps
      },
      {
        path: '/csr-list',
        key: 'csr-list',
        exact: true,
        render: () => <CSRList title="页面_CSRList" />,
        getInitialProps: CSRList.getInitialProps
      }
    ]
  }
]

export default routes
