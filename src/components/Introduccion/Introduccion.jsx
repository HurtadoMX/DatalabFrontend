import React from "react";
import "./introduccion.css";
import datalab from "../../assets/svg/DataLab_color.svg"
import scroll from "../../assets/svg/Scroll.svg"
import metodologia from "../../assets/svg/Metodología.svg"
import INSIGHTS_ACCIONABLES from "../../assets/svg/INSIGHTS ACCIONABLES.svg"
import Crecimiento_ROI from "../../assets/svg/Crecimiento ROI.svg"
import 'animate.css';
import { Link } from "react-scroll";



const Introduccion = () => {
  return (
    <div className="introduccion" id="inicio">
      <div className="introduccion-container">
        {/* <div className="introduccion-left"><h1>WE ARE DATALAB</h1></div> */}

        <div>
          
       

            <div className="introduccion-primera-parte">
                <hr className="introduccion-hr"/>
          <img src={datalab} alt="ICONO-DATALAB" className="animate__animated animate__backInLeft" />
          <button><span> <Link to="contactos" spy={true} smooth={true} offset={-70} duration={500}>Contacto</Link></span></button>
            </div>

            <div className="introduccion-segunda-parte">
          <div className="introduccion-titulo">
            <h4>DATA SCIENCE & ANALYTICS</h4>
            <h1 className="introduccion-text-principal">
              PARA TRANSFORMAR <b className="introduccion-text-negritas">DATOS</b> EN <b className="introduccion-text-negritas">INSIGHTS</b> QUE INCREMENTAN LA EFICIENCIA,
              MAXIMIZEN LA EFECTIVIDAD Y GENERAN VALOR
            </h1>
            <div className="copia-introduccion-primera-parte">
           <button><span> <Link to="contactos" spy={true} smooth={true} offset={-70} duration={500}>Contacto</Link></span></button>
           </div>
          </div>
          <div className="introduccion-scroll animate__animated animate__backInDown">
            <img src={scroll} alt="" />
            <h3>Scroll</h3>
          </div>
            </div>
        <div className="introduccion-tercera-parte">
            <div className="introduccion-insights">

          <h1 className="introduccion-text-diferencia"> <span className="introduccion-text-span">INSIGHTS</span>   QUE</h1>
          <h1 className="introduccion-text-diferencia">HACEN LA DIFERENCIA</h1>
            </div>
          <div className="introduccion-items">
            <div className="introduccion-primer-item">
              <img className="introduccion-imagen-metodologia" src={metodologia} alt="" />
              <h3><p>Metodologia</p> Enfocada al Negocio</h3>

              
              <p>
                Entendemos que no solo se trata de recopilar y analizar
                informacion Nuestra mision es descubrir insights que generen
                valor para el negocio
              </p>
            </div>


            {/* //ESTE ES EL ITEM QUE SE MOSTRARA EN LA VERSION RESPONSIVE */}
              <div className="item-separados">

              <img className="introduccion-imagen-metodologia" src={metodologia} alt="" />
              <h3><p>Metodologia</p> Enfocada al Negocio</h3>
              </div>
            <div className="introduccion-primer-item2">
              <p>
                Entendemos que no solo se trata de recopilar y analizar
                informacion Nuestra mision es descubrir insights que generen
                valor para el negocio
              </p>
              </div>




            <div className="introduccion-primer-item">
              <img className="introduccion-imagen-metodologia" src={INSIGHTS_ACCIONABLES} alt="" />
              <h3> <p>Insights</p> Accionables</h3>
              <p>
                Construimos Insights, a partir de tus datos, para tomar las
                mejores decisiones para el negocio
              </p>
            </div>




            {/* //ESTE ES EL ITEM QUE SE MOSTRARA EN LA VERSION RESPONSIVE */}
              <div className="item-separados">

            <img className="introduccion-imagen-metodologia" src={INSIGHTS_ACCIONABLES} alt="" />
              <h3> <p>Insights</p> Accionables</h3>
              </div>
            <div className="introduccion-primer-item2">
              <p>
                Construimos Insights, a partir de tus datos, para tomar las
                mejores decisiones para el negocio
              </p>
              </div>





            <div className="introduccion-primer-item">
              <img className="introduccion-imagen-metodologia" src={Crecimiento_ROI} alt="" />
              <h3><p>Foco en</p> Crecimiento & ROI</h3>
              <p>
                Trabajamos con tu equipo para identificar oportunidades de
                crecimiento u optimizacion, siempre sustentadas por el análisis
                de datos
              </p>
            </div>




            {/* //ESTE ES EL ITEM QUE SE MOSTRARA EN LA VERSION RESPONSIVE */}
              <div className="item-separados">

            <img className="introduccion-imagen-metodologia" src={Crecimiento_ROI} alt="" />
              <h3><p>Foco en</p> Crecimiento & ROI</h3>
              </div>
            <div className="introduccion-primer-item2">
              <p>
                Trabajamos con tu equipo para identificar oportunidades de
                crecimiento u optimizacion, siempre sustentadas por el análisis
                de datos
              </p>
              </div>





          </div>
        </div>
        </div>

        {/* <div className="introduccion-right"><h1>WE ARE DATALAB</h1></div> */}
      </div>
    </div>
  );
};

export default Introduccion;
