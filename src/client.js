import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './app'

const onDOMContentLoaded = () => ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)