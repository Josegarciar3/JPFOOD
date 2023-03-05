import React from 'react';
import '../stylesheets/Productos.css'

function Productos(props){
  return(
    <header className='header-info'>
      <div className='contenedor-productos'>
        <img
          className='producto'
          src={require(`../images/drink.jpg`)}
          alt='drink' /> 

        <img
          className='producto'
          src={require(`../images/pasta.jpg`)}
          alt='pasta' /> 

        <img
          className='producto'
          src={require(`../images/pizza.jpg`)}
          alt='pizza' />  
        <img
          className='producto'
          src={require(`../images/postre.jpg`)}
          alt='postre' /> 
      </div>    
      <div className='text-head'>
        <h4> About us. </h4>
          <p>
          La pasta al dente y pizza Nápoles representa dos de los platillos más queridos de Italia. 
          Vive una experiencia única en JP FOOD, un lugar para compartir con las personas que amas. 
          Nos destacamos por entregarte un pedacito de Italia 🇮🇹. <br/>
          Nuestros platos tradicionales pero innovadores son creados por 
          nuestro querido Chef Picasso nacido en Nápoles.

          </p>
      </div>
    </header>  
  ); 
} 

export default Productos;
