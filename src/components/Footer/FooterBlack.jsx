import React from 'react'
import './footer.css'
import datalab from "../../assets/svg/DataLab_color.svg"
import Telefono from "../../assets/png/Telefono.png"
import Mail from "../../assets/png/Mail.png"
import Ubicacion from "../../assets/png/Ubicación.png"
import Facebook from "../../assets/png/Facebook.png"
import Whatsapp from "../../assets/png/Whatsapp.png"


const FooterBlack = () => {
  return (
    <div className="footer">
      <div>
        <img className="footer-image" src={datalab} alt="DATALAB LIGHT" />
      </div>
      <div className="footer-agroup">
        <div className="footer-text">
          <p>
            Copyright 2018 Data Lab MX . Todos los derechos reservados. Data Lab
            fomenta el uso de su infomacion, publicaciones y productos de
            multimedia (sonido, imagen, software, etc.) por derechos de autor
          </p>
        </div>
        <div className="footer-agroup-container">
          <div className="footer-item1">
            <h2 className="h2">Soporte</h2>
            <h3 className="h3">Contacto</h3>
            <h3 className="h3">Numero</h3>
          </div>
          <div className="footer-item2">
            <h2 className="h2">Faq</h2>
            <h3 className="h3">Manage Deliveries</h3>
            <h3 className="h3">Politicas de Privacidad</h3>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="footer-footer-items">
          <div className='footer-primer-item'>
              <div className='footer-primer-item-img'>

            <img style={{width: "40px"}} src={Telefono} alt="Telefono" />
              </div>
              <div className='footer-primer-item-text'>

            <h4>Telefono</h4>
            <h2 >310-437-2766</h2>
              </div>
          </div>
          <div className='footer-segundo-item'>
              <div className='footer-segundo-item-img'>

            {" "}
            <img style={{width: "40px"}} src={Mail} alt="Mail" />
              </div>
              <div className='footer-segundo-item-text'>

            <h4>Mail</h4>
            <h2 >info@datalabmx.com</h2>
              </div>
          </div>
          <div className='footer-tercer-item'>
              <div className='footer-tercer-item-img'>

            {" "}
            <img style={{width: "40px"}} src={Ubicacion} alt="Direccion" />
              </div>
              <div className='footer-tercer-item-text'>

            <h4>Direccion</h4>
            <h2 >
             <p> Torre Moliere; Calle Moliere No 13, Piso 7. Col.Polanco III</p>
              Seccion. Miguel Hidalgo, CDMX, 11, 550
            </h2>
              </div>
          </div>
          <div className="footer-agroup-container-mobile">
          <div className="footer-item1">
            <h2 className="h2">Soporte</h2>
            <h3 className="h3">Contacto</h3>
            <h3 className="h3">Numero</h3>
          </div>
          <div className="footer-item2">
            <h2 className="h2">Faq</h2>
            <h3 className="h3">Manage Deliveries</h3>
            <h3 className="h3">Politicas de Privacidad</h3>
          </div>
        </div>
        </div>
        <div className='footer-footer-items2'>
          
          <img style={{width: "40px", height:'40px', marginTop:'-10px', marginRight:'10px'}} src={Facebook} alt="redes" className='redes'/>
          <img style={{width: "40px", height:'40px', marginTop:'-10px', marginRight:'10px'}} src={Whatsapp} alt="whatsapp" className='redes' />
          <div className='footer-derechos'>

          <h6>2000 2021. Todos los derechos reservados</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBlack