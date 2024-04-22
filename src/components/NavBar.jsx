import React from 'react';
import "../../public/styles/NavBar.css"


function NavBar() {
  return (
    <nav className='fixed-nav m-none flex inline-block align-center'>
      <ul className='m-none flex li-none'>
        <li className='p-right-10'><a href="/">Home</a></li>
        <li className='p-right-10'><a href="/about">About</a></li>
        <li className='p-right-10'><a href="/services">Services</a></li>
        <li className='p-right-10'><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar