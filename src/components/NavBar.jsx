import React from 'react';
import "../styles/NavBar.css"


const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__circle'>
        <ul className='navbar__menu o-wrapper'>
          <li className='navbar__item'><a className='navbar__link' href="/">Home</a></li>
          <li className='navbar__item'><a className='navbar__link' href="/about">About</a></li>
          <li className='navbar__item'><a className='navbar__link' href="/services">Services</a></li>
          <li className='navbar__item'><a className='navbar__link' href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar