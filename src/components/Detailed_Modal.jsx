import React, { Children } from 'react'

const Detailed_Modal = ({children, isOpen, onClose}) => {
const modalClose = ()=>{
    console.log("he")
}

  return (
    <div className='modalOverlay'>
        <div className="modalContent">
            <button className='modalClose_btn' onClick={modalClose}>X</button>
        {children}
        
        </div>

    </div>
  )
}

export default Detailed_Modal