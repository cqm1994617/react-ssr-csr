import React from 'react'
import fs from 'fs'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import getRoutes from '../route/index'
import { Provider } from 'react-redux';
import creator from '../store'
import { ServerStyleSheet } from 'styled-components'

export const render = (req) => {

  const sheet = new ServerStyleSheet()
  const store = creator()

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path} >
          {getRoutes()}
        </StaticRouter>
      </Provider>
    )
  )

  const styleTags = sheet.getStyleTags()

  let html = fs.readFileSync('dist/index.html', 'utf-8')

  html = html.replace(/<div id="app"><\/div>/g, `<div id="app">${content}</div>`)
    .replace(/<head>/, `<head>${styleTags}`)

  console.log(html)

  return html
}
