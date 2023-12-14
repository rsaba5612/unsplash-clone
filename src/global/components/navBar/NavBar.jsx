import React from 'react'
import "./NavBar.Scss";
import { IoMdSearch } from "react-icons/io";
import "./NavBar.Scss";

const NavBar = () => {
  return (
    <div className='navBarContainer'>
    <img src={require("../../../assets/images/Unsplash_Symbol.png")} alt="" />
    <form>
    <IoMdSearch/>
     <input type='text' require />
    </form>
    <span>Advertise</span>
    <span>Blog</span>
    <span>Unsplash</span>
    </div>
  )
}

export default NavBar