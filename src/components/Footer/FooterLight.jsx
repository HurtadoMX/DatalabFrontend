import React from "react";
import "./footer.css";
import datalab from "../../assets/svg/DataLab_calado.svg";
import Telefono from "../../assets/png/Telefono.png";
import Mail from "../../assets/png/Mail.png";
import Ubicacion from "../../assets/png/Ubicación.png";
import Facebook from "../../assets/png/Facebook.png";
import Whatsapp from "../../assets/png/Whatsapp.png";


const FooterLight = () => {
  return (
    <div className="footer" style={{backgroundColor: '#040415'}}>
    <div>
      <img className="footer-image" src={datalab} alt="DATALAB LIGHT" />
    </div>
    <div className="footer-agroup">
      <div className="footer-text">
        <p style={{color: "white"}}>
          Copyright 2022 Data Lab MX . Todos los derechos reservados. Data Lab
          MX fomenta el uso de su infomación, publicaciones y productos de
          multimedia (sonido, imagen, software, etc.) por derechos de autor
        </p>
      </div>
      <div className="footer-agroup-container">
        <div className="footer-item1">
          <h2 className="h2" style={{color: "white"}}>Soporte</h2>
          <h3 className="h3" style={{color: "white"}}>Contacto: <a className="color-a" href="mailto:soporte@datalabmx.com?Subject=Hola%20DatalabMX%20, porfavor%20me%20podrías%20ayudar%20con%20soporte.">soporte@datalabmx.com</a></h3>
          <h3 className="h3" style={{color: "white"}}>Telefono: <a className="color-a" href="https://api.whatsapp.com/send?phone=525540976472&text=Hola DatalabMX, porfavor me podrías ayudar con soporte!">+52 554097 6472</a></h3>
        </div>
        {/* <div className="footer-item2">
          <h2 className="h2">Faq</h2>
          <h3 className="h3">Manage Deliveries</h3>
          <h3 className="h3">Politicas de Privacidad</h3>
        </div> */}
      </div>
    </div>
    <div className="footer-footer">
      <div className="footer-footer-items">
        <div className="footer-primer-item">
          <div className="footer-primer-item-img">
            {/* /* Con mensaje predefinido */}
            {/* <a href="https://api.whatsapp.com/send?phone=0123456789&text=Hola DatalabMX, Necesito mas informacion!">Envíanos un mensaje de WhatsApp</a> */}
            <a href="tel:5568198017">
              <img
                style={{ width: "40px" }}
                src={Telefono}
                alt="Telefono"
              ></img>
            </a>
          </div>
          <div className="footer-primer-item-text">
            <h4 style={{color: "white"}}>Teléfono</h4>
            <h2>55 - 6819 - 8017</h2>
          </div>
        </div>
        <div className="footer-segundo-item">
          <div className="footer-segundo-item-img">
            {" "}
            <a href="mailto:info@datalabmx.com?Subject=Me%20interesa%20saber%20mas%20de%20datalabMx">
              <img style={{ width: "40px" }} src={Mail} alt="Mail" />
            </a>
          </div>
          <div className="footer-segundo-item-text">
            <h4 style={{color: "white"}}>Mail</h4>
            <h2>info@datalabmx.com</h2>
          </div>
        </div>
        <div className="footer-tercer-item">
          <div className="footer-tercer-item-img">
            {" "}
            <a href="https://goo.gl/maps/Y9WhHcMErcU7rkH99">
              <img
                style={{ width: "40px" }}
                src={Ubicacion}
                alt="Direccion"
              />
            </a>
          </div>
          <div className="footer-tercer-item-text">
            <h4 style={{color: "white"}}>Direccion</h4>
            <h2>
              <p>
                {" "}
                Torre Moliere; Calle Moliere No 13, Piso 7. Col.Polanco III
              </p>
              Sección. Miguel Hidalgo, CDMX, 11, 550
            </h2>
          </div>
        </div>
        <div className="footer-agroup-container-mobile">
          <div className="footer-item1">
            <h2 className="h2" style={{color: "white"}}>Soporte</h2>
            <h3 className="h3" style={{color: "white"}}>Contacto: <a className="color-a" href="mailto:soporte@datalabmx.com?Subject=Hola%20DatalabMX%20, porfavor%20me%20podrías%20ayudar%20con%20soporte.">soporte@datalabmx.com</a></h3>
            <h3 className="h3" style={{color: "white"}}>Telefono: <a className="color-a" href="https://api.whatsapp.com/send?phone=525540976472&text=Hola DatalabMX, porfavor me podrías ayudar con soporte!">+52 554097 6472</a></h3>
          </div>
          {/* <div className="footer-item2">
            <h2 className="h2">Faq</h2>
            <h3 className="h3">Manage Deliveries</h3>
            <h3 className="h3">Politicas de Privacidad</h3>
          </div> */}
        </div>
      </div>
      <div className="footer-footer-items2">
        {/* <img
          style={{
            width: "40px",
            height: "40px",
            marginTop: "-10px",
            marginRight: "10px",
          }}
          src={Facebook}
          alt="redes"
          className="redes"
        /> */}
        <a href="https://api.whatsapp.com/send?phone=525540976472&text=Hola DatalabMX, Necesito mas informacion!">

        <img
          style={{
            width: "40px",
            height: "40px",
            marginTop: "-10px",
            marginRight: "10px",
          }}
          src={Whatsapp}
          alt="whatsapp"
          className="redes"
          />
          </a>
        {/* <div className="footer-derechos">
          <h6>2000 2021. Todos los derechos reservados</h6>
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default FooterLight