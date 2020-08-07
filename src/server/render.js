import React from 'react'
import fs from 'fs'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../route/index'
import { Provider } from 'react-redux'
import creator from '../store'
import { ServerStyleSheet } from 'styled-components'
import { matchRoutes, renderRoutes } from 'react-router-config'
import pathConfig from '../../path.config'
import request from 'request'

async function getHTML(url) {
  return new Promise(resolve => {
    request(url, (err, res, body) => {
      resolve(body)
    })
  })
}

export const render = async (req, res) => {

  const sheet = new ServerStyleSheet()
  const store = creator()

  const matchedRoutes = matchRoutes(routes, req.path.replace(pathConfig.publicPathReg, ''))

  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.getInitialProps) {
      promises.push(item.route.getInitialProps(store))
    }
  })

  await Promise.all(promises)

  let html = ''

  if (process.env.NODE_ENV === 'development') {
    html = await getHTML('http://localhost:9000')
  } else {
    html = fs.readFileSync('dist/index.html', 'utf-8')
  }
  const storeStr = JSON.stringify(store.getState())
  const stopGetInitialProps = promises.length > 0 ? 1 : 0

  const jsx = sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={req.path.replace(pathConfig.publicPathReg, '')} >
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  )
  const stream = sheet.interleaveWithNodeStream(
    renderToNodeStream(jsx)
  )

  const htmlBefore = html.split('<body>')[0] + '<body><div id="app">'


  const htmlAfter = (
    `</div>
    <script>window.__GLOBAL_STORE = ${storeStr}</script>
    <script>window.__STOP_GET_INITIAL_PROPS = ${stopGetInitialProps}</script>` + html.split('<div id="app"></div>')[1]
  )

  res.write(htmlBefore)

  stream.pipe(res, { end: false })
  stream.on('end', () => res.end(htmlAfter))
  stream.on('error', () => res.end('error'))

}
