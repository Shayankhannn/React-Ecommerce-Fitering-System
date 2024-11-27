import React from 'react'
import { FaHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import "./Nav.css";


const Nav = ({query,handleInputChange}) => {
  return (
    <>
<nav>
<div className="nav-container">
  <input type="text" placeholder='Search Here....' 
  className='search-input' value={query} onChange={handleInputChange}
 
  />
</div>
<div className="profile-container">
  <a href="#"><FaHeart className='nav-icons' /></a>
  <a href="#"><AiOutlineUser className='nav-icons' /></a>
  <a href="#"><IoCartOutline className='nav-icons'/></a>
</div>
</nav>
    </>
  )
}

export default Nav