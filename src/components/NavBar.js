import React from 'react';
import '../stylesheets/NavBar.css'


function NavBar(){
  return(
    <div className='navbar-contenedor'>
      
        <ul>
          <li>
            Home
          </li>
          <li>
            Book
          </li>
          <li>
          <img
            className='logo-restaurante'
            src={require('../images/logo.jpg')}
            alt='logo'/>
          </li>
          <li>
            Blog
          </li>
          <li>
            About us
          </li>
        </ul>
    </div>
  )
}

export default NavBar;