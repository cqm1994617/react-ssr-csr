import express from 'express'
import path from 'path'
import { render } from './render'

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.send(render(req))
})

app.listen(3001, () => {
  console.log('listen:3001')
})
