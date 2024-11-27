import React from 'react'

const Buttons = ({onClickHandler,value,title}) => {
  return (
    <div>
      <button className="btns" onClick={onClickHandler} value={value}>{title}</button>
    </div>
  )
}

export default Buttons