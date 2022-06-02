import React from 'react'
import './contacto.css'


const Contacto = () => {
  return (
    <div className="contacto" id='contactos'>
      <div className="contacto-titulo">
        <hr className="hr" />
        <h1>CONTACTO</h1>
      </div>
      <div className="contacto-group">
        <div className="contacto-trabajemos">
          <h3>¡Trabajemos</h3>
          <h2> Juntos!</h2>
        </div>
        <div className="contacto-formulario">
          <p>
            Tienes preguntas sobre la agencia o ¿Solo quieres saber más sobre lo
            que hacemos? Escribenos
          </p>
          <input className='contacto-nombre' type="text" placeholder="Nombre" />
          <input className='contacto-email' type="text" placeholder="Email" />
          <input className='contacto-mensaje' type="text" placeholder="Mensaje" />
          <button className='contacto-btn'>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Contacto