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
        <h4> Hola </h4>
          <p>
            Restaurante familiar 
          </p>
      </div>
    </header>  
  ); 
} 

export default Productos;
