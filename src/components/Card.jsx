
import { useState } from "react";
import { IoBagHandleSharp } from "react-icons/io5";

import Detailed_Modal from '../Modal/Detailed_Modal'

const Card = ({newPrice,img,title,prevPrice,star,reviews}) => {

  const [isOpenModal,setIsOpenModal] = useState(false)

  const openModal = ()=>setIsOpenModal(true)
  const closeModal = ()=>setIsOpenModal(false)
  return (
    <>
<section className="card">
  <img src={img} className='card-img' alt="" />
<div className="card-details">
  <h3 className="card-title">{title}</h3>
  <section className="card-reviews">
  {star}{star}{star}{star} 
  <span className="total-reviews">{reviews}</span>
  </section>
  <section className="card-price">
    <div className="price">
      <del>{prevPrice}</del> {newPrice}
    </div>
    <div className="bag">
    <IoBagHandleSharp className='bag-icon'/>
    </div>
 <div className="card-view-btn">
    <button onClick={openModal}>Read More</button>

 </div>
  </section>
</div>
</section>
<Detailed_Modal isOpen={isOpenModal} onClose={closeModal}>
<div className="detail-modal-content">
 <div className="detail-modal-Img">
 <img src={img} className='card-img' alt="" />
 </div>
 <div className="detail-modal-card-details">
  <h3 className="card-title">{title}</h3>
  <section className="card-reviews">
  {star}{star}{star}{star} 
  <span className="total-reviews">{reviews}</span>
  </section>
  <section className="detail-modal-card-price">
    <div className="price">
     <b>Price:</b>  <del>{prevPrice}</del> {newPrice}
    </div>
    <div className="detail-modal-detail">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi illo officia aut fuga quia nihil. Voluptatibus earum maxime non deleniti!</p>
   
    </div>
 
  </section>
</div>
</div>
</Detailed_Modal>
</>
  )
}


export default Card