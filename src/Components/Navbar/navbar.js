import React from 'react';
import "./navbar.css";
import Logo from "../../Images/shirdi-sai-baba.jpg"
// import Intro from "../Intro/Intro";

const Navbar = () => {
  return (
  <nav className='aggr'>

    <div className='aggcol'>
      <img src= {Logo} alt='Logo' className='agglogo'/>
      <div className='aggcool'>
      Sri Sai Tractor Suppliers
      </div>
    </div>
    <div className='aggMenu'>
        <div className="aggitems"><a href='#home'>Home</a></div>
        <div className="aggitems"><a href='#about'>About</a></div>
        <div className="aggitems"><a href='#ser'>Services</a></div>
        <div className="aggitems"><a href='#acc'>Accomplishments</a></div>
        <div className="aggitems"><a href='#contact'>Contact Us</a></div>
    </div>
    <button className='aggbtn'>Contact Us</button>
  </nav>
  )
}

export default Navbar;