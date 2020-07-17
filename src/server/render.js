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
  const initialPropsPromises = []

  console.log(req.path)
  console.log(matchedRoutes)

  matchedRoutes.forEach(item => {
    if (item.route.getInitialProps) {
      initialPropsPromises.push(item.route.getInitialProps(store))
    }
  })

  const initialProps = await Promise.all(initialPropsPromises)

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

  html = html.replace(/<div id="app"><\/div>/g,
    `<div id="app">${content}</div>`
  ).replace(/<head>/, `<head>${styleTags}`)

  return html
}
