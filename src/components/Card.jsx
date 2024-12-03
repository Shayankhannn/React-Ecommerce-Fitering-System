
import { useState } from "react";
import { IoBagHandleSharp } from "react-icons/io5";

import Detailed_Modal from '../components/Detailed_Modal'

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
    <button onClick={openModal}>view</button>
    </div>
 
  </section>
</div>
</section>
<Detailed_Modal isOpen={isOpenModal} onClose={closeModal}>
<h1>testing</h1>
</Detailed_Modal>
</>
  )
}
// testing
export default Card