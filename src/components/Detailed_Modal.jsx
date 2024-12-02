import React, { Children } from 'react'

const Detailed_Modal = ({ children, isOpen, onClose }) => {

  if(!isOpen){
    return null;
  }

  return (
    <div className='modalOverlay'>
      <div className="modalContent">
        <button className='modalClose_btn' onClick={onClose}>X</button>
        {children}

      </div>

    </div>
  )
}

export default Detailed_Modal