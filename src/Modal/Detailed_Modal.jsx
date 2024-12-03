import React, { Children } from 'react'
import { createPortal } from 'react-dom';

const Detailed_Modal = ({ children, isOpen, onClose }) => {

  if(!isOpen){
    return null;
  }

  return createPortal(
    <div className='modalOverlay'>
      <div className="modalContent">
        <button className='modalClose_btn' onClick={onClose}>X</button>
        {children}

      </div>

    </div>,
    document.getElementById('modalPortal')
  )
}

export default Detailed_Modal