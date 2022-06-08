import React, { useState } from "react";
import "./contacto.css";
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { enviarEmail } from "../../redux/actions";
import Modal from "../modal/Modal";
import ModalError from "../modal/ModalError";
import lateral from "../../assets/png/LATERAL-DERECHA-NEGRA.png"
import styled from 'styled-components';


const Contacto = () => {




  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [input, setInput]=useState({
    name: "",
    email: "",
    message: ""
    })

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [estadoModalError1, cambiarEstadoModalError1] = useState(false);





    function handleSubmit(e) {
      e.preventDefault();
      if (
        input.name &&
        input.email &&
        input.message 
      ) {
        dispatch(enviarEmail(input));
        cambiarEstadoModal1(!estadoModal1)
        
        //ahora usamos nuestro hook setInput para limpiar nuestros campos
        setInput({
          name: "",
          email: "",
          message: ""
        });

        navigate("/");
      } else {
        cambiarEstadoModalError1(!estadoModalError1)

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
    <>
    <img className="derecha-negra" src={lateral} alt="" />
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
            <ContenedorBotones>
            <Boton  type="submit"   onClick={e=>handleSubmit(e)}>Enviar</Boton>
		      	</ContenedorBotones>
            </form>
        </div>
      </div>
    </div>
    <div>
    
      <Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				titulo="Hola!"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
        >
				<Contenido>
					<h1>Tu mensaje fue enviado con exito!</h1>
					<p>El equipo de DatalabMX se pondra en contacto contigo lo mas pronto posible, saludos!</p>
					<BotonModal onClick={() => cambiarEstadoModal1(!estadoModal1)}>Aceptar</BotonModal>
				</Contenido>
			</Modal>

     
    </div>
    <div>
    <ModalError
				estado={estadoModalError1}
				cambiarEstado={cambiarEstadoModalError1}
				titulo="Ups!"
				mostrarHeader={true}
				mostrarOverlay={true}
				posicionModal={'center'}
				padding={'20px'}
        >
				<Contenido>
					<h1>Tuvimos problema para enviar tu mensaje!</h1>
					<p>Porfavor llena correctamente todos los campos requeridos, saludos!</p>
					<BotonModal onClick={() => cambiarEstadoModalError1(!estadoModalError1)}>Volver</BotonModal>
				</Contenido>
			</ModalError>
    </div>
        </>
  );
};

export default Contacto;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const BotonModal = styled.button`
display: block;
padding: 10px 30%;
border-radius: 100px;
color: #fff;
border: none;
background: #f4511e;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-weight: 500;
transition: .3s ease all;

&:hover {
  background: #f4511e;
}
`;

const Boton = styled.button`
	display: block;
	padding: 10px 55%;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #f4511e;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #f4511e;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;