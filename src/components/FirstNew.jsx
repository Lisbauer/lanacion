import React from "react";
import "./firstNew.css";

const FirstNew = () => {
  return (
    <>
      <section className="FirstNewContent">
        <div className="FirstNewTitle">
          <h2>
            Dengue: exasesores de los gobiernos kirchneristas, entre otras 300
            personas, criticaron el manejo actual de la epidemia
          </h2>
          <p>
            Los especialistas respondieron a un comunicado del Ministerio de
            Salud de la Nación que cuestionaba la gestión de Alberto Fernández
            con respecto a la crisis sanitaria y que dudada de la efectividad de
            la vacuna
          </p>
          <p style={{ fontSize: "0.9em", color: "grey" }}>
            8 de abril de 2024 17:50
          </p>

          <div className="notaryBox">
            <img src="./images/alejandrohorvat.png" alt="alejandro horvat" />
            <div className="notaryTextBox">
              <a href="">
                <h3>Alejandro Horvat</h3>
              </a>
              <h3 className="notarySmallText">LA NACION</h3>
            </div>
          </div>

          <img className="dengueImage" src="./images/dengue.png" alt="" />
          <p style={{ fontSize: "1em" }}>
            Especialistas médicos refutaron argumentos expuestos en un
            comunicado del Ministerio de Salud de la Nación sobre el manejo de
            la epidemia de dengue difundido la semana pasada
          </p>
        </div>

        <div className="paragraphDengue">
          <p>
            <span style={{fontSize:"2em"}}>L</span>a semana pasada, en medio de la epidemia histórica de dengue que
            atraviesa la Argentina, <span style={{fontWeight:"700"}}>el Ministerio de Salud de la Nación, a cargo
            de Mario Russo</span>, publicó un documento el 2 pasado en el que puso en
            duda la incorporación de la vacuna <span style={{fontWeight:"700"}}>Qdenga</span> como herramienta para
            mitigar el brote, debido a que el antígeno “continúa siendo sometida
            a estudios para establecer su efectividad según el rango etario”.
            Cabe aclarar que el fármaco fue aprobado por la Administración
            Nacional de Medicamentos, Alimentos y Tecnología Médica (Anmat) en
            2023 para personas de cuatro a 16 años. A su vez, en el escrito, la
            cartera sanitaria apuntó contra el gobierno de Alberto Fernández:
            <span style={{fontWeight:"700"}}>“Hoy estamos sufriendo las consecuencias de la falta de prevención
            que hubo el año pasado, donde no se hizo el trabajo
            correspondiente”, señalaron.</span>
          </p>
          <p>
            Como respuesta a ese comunicado, especialistas de diversas
            instituciones, algunos de ellos actualmente ligados al gobierno de
            <span style={{fontWeight:"700"}}>Axel Kicillof</span> o que fueron asesores del expresidente Fernández
            durante la pandemia de coronavirus, firmaron un escrito de 23
            páginas en el que señalaron como incorrectas a algunas aseveraciones
            oficiales, criticaron el accionar de la administración de Javier
            Milei, resaltaron las demoras en la toma de decisiones
            epidemiológicas claves y relativizaron las afirmaciones sobre la
            vacuna. También dieron el apoyo al comunicado médicos, académicos y
            ciudadanos.
          </p>
        </div>
      </section>
    </>
  );
};

export default FirstNew;
