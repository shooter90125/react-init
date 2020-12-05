import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import { StaticRouter } from 'react-router-dom'
import App from './app'
import fs from 'fs'

const templatePath = './src/template.html'
const publicPath = './public'

const server = express()

server.use('/public', express.static(publicPath))

server.get('/*', (req, res) => {
  const template = fs.readFileSync(templatePath, 'utf8')
  const renderedApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  const html = template.replace('<!-- APP -->', renderedApp)
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  res.send(html)
})

server.listen(3000, () => console.log('Served on port 3000'))