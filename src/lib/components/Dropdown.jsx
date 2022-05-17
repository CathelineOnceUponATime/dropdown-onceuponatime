import { objectToTab } from './tools'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Sass/main.scss'

/**
 * @param {String} label name of label
 * @param {String} name id of select HTML element
 * @param {Object} obj object contain fields
 * @param {string} field1 field of dropdown
 * @param {string} field2 field of dropdown optionnal
 * @component
 */
function Dropdown ({ label, name, obj, field1, field2 }) {
  let tab
  const multidim = !(field2 === (null, undefined))
  if (multidim) {
    tab = objectToTab(obj, field1, field2)
  } else {
    tab = objectToTab(obj, field1)
  }

  const [selected, setSelected] = useState('')

  const handleChange = e => {
    setSelected(e.target.value)
  }

  return (
    <div className='dropdown'>
      <label> {label} </label>
      <select id={name} className='select-menu' value={selected} onChange={handleChange}>
        {multidim
          ? tab.map((tab2Val) =>
            <option value={tab2Val[1]} key={tab2Val[1]}>{tab2Val[0]}</option>
            )
          : tab.map((tab1Val) =>
            <option value={tab1Val} key={tab1Val}>{tab1Val}</option>
          )}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  obj: PropTypes.array.isRequired,
  field1: PropTypes.string.isRequired,
  field2: PropTypes.string
}

export default Dropdown
