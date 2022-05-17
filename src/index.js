import React from 'react'
import ReactDOM from 'react-dom/client'
import Dropdown from './lib/components/Dropdown'
import { states } from './data'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div> Hello World </div>
    <Dropdown label='State' name='state' obj={states} field1='name' field2='abbreviation' />
  </React.StrictMode>
)
