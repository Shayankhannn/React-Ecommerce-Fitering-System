import React, { Children } from 'react'
import { createPortal } from 'react-dom';
import '../Modal/Detailed_Modal.css'

const Detailed_Modal = ({ children, isOpen, onClose }) => {

  if(!isOpen){
    return null;
  }
  const handleOverlayClick = (e)=>{
    if(e.target.className === 'modalOverlay'){
      onClose();
    }
  }

  return createPortal(
    <div className='modalOverlay' onClick={handleOverlayClick}>
      <div className="modalContent">
        <button className='modalClose_btn' onClick={onClose}>X</button>
        {children}

      </div>

    </div>,
    document.getElementById('modalPortal')
  )
}

export default Detailed_Modal