import { StrictMode } from 'react'
import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <App />
)