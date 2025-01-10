import { StrictMode } from 'react'
import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

const Button = ({t}) => {
  return (
    <button>{t}</button>
  )
}

root.render(
  <Fragment>
    <Button t="button 1"/>
    <Button t="button 2"/>
    <Button t="button 3"/>
  </Fragment>
)