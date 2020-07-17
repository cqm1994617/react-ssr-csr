import express from 'express'
import '@babel/polyfill'
import path from 'path'
import { render } from './render'

const app = express()

app.use('/assets', express.static('dist'))

app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.split("/").pop() === 'favicon.ico') {
    return res.sendStatus(204)
  }
  return next()
})

app.get('*', async (req, res) => {
  const html = await render(req)
  res.send(html)
})

app.listen(3001, () => {
  console.log('listen:3001')
})
