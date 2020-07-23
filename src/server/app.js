import express from 'express'
import '@babel/polyfill'
import pathConfig from '../../path.config'
import { render } from './render'
import fs from 'fs'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use('/', createProxyMiddleware({
    target: 'http://localhost:9000',
    changeOrigin: true
  }))
}

app.use(pathConfig.publicPath + '/static', express.static('dist/static'))

app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204)
  }
  return next()
})

app.get('*', async (req, res) => {
  if (req.query._mode !== 'csr') {
    const html = await render(req)
    res.send(html)
  } else {
    let html = fs.readFileSync('dist/index.html', 'utf-8')
    res.send(html)
  }
})

app.listen(3001, () => {
  console.log('listen:3001')
})
