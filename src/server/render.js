import React from 'react'
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../route/index'
import { Provider } from 'react-redux'
import creator from '../store'
import { ServerStyleSheet } from 'styled-components'
import { matchRoutes, renderRoutes } from 'react-router-config'

export const render = async (req) => {

  const sheet = new ServerStyleSheet()
  const store = creator()

  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.getInitialProps) {
      promises.push(item.route.getInitialProps(store))
    }
  })

  await Promise.all(promises)

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} >
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
  )


  const styleTags = sheet.getStyleTags()

  let html = fs.readFileSync('dist/index.html', 'utf-8')

  const storeStr = JSON.stringify(store.getState())

  html = html.replace(/<div id="app"><\/div>/g,
    `<div id="app">${content}</div>
      <script>window.__GLOBAL_STORE = ${storeStr}</script>
    `
  ).replace(/<head>/, `<head>${styleTags}`)

  return html
}
