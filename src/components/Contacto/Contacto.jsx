import React, { useState } from "react";
import "./contacto.css";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { enviarEmail } from "../../redux/actions";


const Contacto = () => {




  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [input, setInput]=useState({
    name: "",
    email: "",
    message: ""
    })




    function handleSubmit(e) {
      e.preventDefault();
      if (
        input.name &&
        input.email &&
        input.message 
      ) {
        dispatch(enviarEmail(input));
        alert("CORREO ENVIADO");

        //ahora usamos nuestro hook setInput para limpiar nuestros campos
        setInput({
          name: "",
          email: "",
          message: ""
        });
        navigate("/");
      } else {
        alert("COMPLETA EL FORMULARIO");
      }
    }

    function handleChange(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      

      console.log(input);
    }



  return (
    <div className="contacto" id="contactos">
      <div className="contacto-titulo">
        <hr className="hr_metodologia" />
        <h1>CONTACTO</h1>
      </div>
      <div className="contacto-group">
        <div className="contacto-trabajemos">
          <h3>¡Trabajemos</h3>
          <h2> Juntos!</h2>
        </div>
        <div className="contacto-formulario">
          <p>
            Tienes preguntas sobre la agencia o ¿Sólo quieres saber más sobre lo
            que hacemos? Escríbenos
          </p>
          <form className="form" onSubmit={(e)=>handleSubmit(e)}>

          <input onChange={(e) => handleChange(e)} className="contacto-nombre" type="text" placeholder="Nombre" name="name" value={input.name}/>
          <input onChange={(e) => handleChange(e)} className="contacto-email" type="text" placeholder="Email" name="email" value={input.email}/>
          <input
          onChange={(e) => handleChange(e)}
            className="contacto-mensaje"
            type="text"
            placeholder="Mensaje"
            name="message"
            value={input.message}
            />

            <input type="hidden" name="_next" value="http://localhost:3000" />
            <input type="hidden" name="_captcha" value="false" />
          <button className="contacto-btn" type="submit"  onClick={e=>handleSubmit(e)}>Enviar</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
