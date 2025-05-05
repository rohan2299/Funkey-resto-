/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {

  return (
    <div>
         <header class="header" id="header">
      <nav>
        <img class="logo" src={Logo} alt=""/>
        <ul>
            <li><a href="#header">HOME</a></li>
            <li><a href="#menu">MENU</a></li>
            <li><a href="#">MY ORDER</a></li>
            <li><a href="#">CART</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
        <form action="" class="search">
            <input class="searchBar" type="search" placeholder="Search FOOD...!"/>
            <button class="sub" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
       <a href="./login.html"> <button class="login" type="button">LOG IN</button></a>
       
      </nav>
     </header>
    </div>
  )
}

export default Navbar;
