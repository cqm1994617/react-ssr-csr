import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import getRoutes from '../common/route'

export const render = (req) => {
  const content = renderToString(
    <StaticRouter location={req.path} >
      {getRoutes()}
    </StaticRouter>
  )

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>服务端渲染脚手架</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="/index.js"></script>
    </body>
    </html>
  `
}
