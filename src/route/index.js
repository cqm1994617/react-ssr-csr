import React from 'react'
import Index from '../client/pages/index'
import Home from '../client/pages/home'
import SSRList from '../client/pages/ssr-list'
import CSRList from '../client/pages/csr-list'
import StyleTest from '../client/pages/style-test'

const routes = [
  {
    key: 'index',
    path: '/',
    component: Index,
    getInitialProps: Index.getInitialProps,
    routes: [
      {
        path: '/home',
        key: 'home',
        exact: true,
        render: () => <Home title="页面_Home" />,
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
      },
      {
        path: '/style-test',
        key: 'style-test',
        exact: true,
        render: () => <StyleTest title="页面_StyleTest" />,
        getInitialProps: StyleTest.getInitialProps
      }
    ]
  }
]

export default routes
