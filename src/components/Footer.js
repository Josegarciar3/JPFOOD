import React from 'react';

import '../stylesheets/Footer.css'

function Footer() {
  return (
    <footer>
        
        <ul class="social_icon">
            <li><a href="https://github.com/Josegarciar3/JPFOOD"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="https://github.com/Josegarciar3/JPFOOD"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="https://github.com/Josegarciar3/JPFOOD"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="https://github.com/Josegarciar3/JPFOOD"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        <ul class="menu" >
            <li><a href="https://github.com/Josegarciar3/JPFOOD">Home</a></li>
            <li><a href="https://github.com/Josegarciar3/JPFOOD">About</a></li>
            <li><a href="https://github.com/Josegarciar3/JPFOOD">Services</a></li>
            <li><a href="https://github.com/Josegarciar3/JPFOOD">Contract</a></li>
        </ul>
        <p>Proyect <strong>'Dashboard'</strong> </p>
        <p>Made with <strong> love ♥️</strong> by <a href='https://github.com/Josegarciar3/JPFOOD'><ion-icon name="logo-github"></ion-icon>Josegarciar3</a></p>
    </footer>
    );
}

export default Footer;
