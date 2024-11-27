import React from 'react'

const Input = ({handleChange,color,name,title,value}) => {
  return (
    <label  className="sidebar-label-container">
    <input type="radio" value={value} onChange={handleChange} name={name}/>
    <span className='checkmark ' style={{backgroundColor:color}}></span>{title}
  </label>
  )
}

export default Input