import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter , faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
        <section className='footerContent'>
        <div className='categoriesBox'>
            <span>Titulo:</span>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
            <a href=""><span>Categoria</span></a>
        </div>

        <div className='footerLineContent'>
            <div className='iconsBox'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            </div>
            <h3>LA NACION</h3>
            <div className='googleApple'>
                <img src="../images/googleplay.png" alt="google play" />
                <img src="../images/appstore.png" alt="apple store" />
            </div>

        </div>

        <hr />

        <div className='spanLine'>
            <a href=""><span>Ultimas noticias</span></a>
            <a href=""><span>Politica</span></a>
            <a href=""><span>Economia</span></a>
            <a href=""><span>El mundo</span></a>
            <a href=""><span>Sociedad</span></a>
            <a href=""><span>Opinion</span></a>
            <a href=""><span>Deportes</span></a>
            <a href=""><span>Lifestyle</span></a>
            <a href=""><span>Espectaculos</span></a>
            <a href=""><span>Edicion impresa</span></a>
            <a href=""><span>LN+</span></a>
            <a href=""><span>Club LA NACION</span></a>
        </div>

        <div className='spanLine'>
            <span>Revistas</span>
            <a href=""><span>OHLALA!</span></a>
            <a href=""><span>HOLA!</span></a>
            <a href=""><span>ROLLING STONE</span></a>
            <a href=""><span>LIVING</span></a>
            <a href=""><span>BRANDO</span></a>
            <a href=""><span>JARDIN</span></a>
            <a href=""><span>LUGARES</span></a>
        </div>
        
        <div className='spanLine'>

            <span>Club del vino:</span>
            <a href=""><span>Bon vivir</span></a>

            <span>Envios:</span>
            <a href=""><span>HOP</span></a>
            <a href=""><span>Colecciones</span></a>
            <a href=""><span>Master en periodismo</span></a>
            <a href=""><span>Fundacion LA NACION</span></a>
            <a href=""><span>Avisos solidarios</span></a>
        </div>

        <hr />

        <div>
            <div className='spanLine'>
                <a href=""><span>Mapa del sitio</span></a>
                <a href=""><span>Ayuda</span></a>
                <a href=""><span>Terminos y condiciones</span></a>
                <a href=""><span>Como anunciar</span></a>
                <a href=""><span>Suscribirse al diario impreso</span></a>
            </div>

            <div className='spanLine'>
                <span>Protegido por re CAPTCHA:</span>
                <a href=""><span>Condiciones</span></a>
                <a href=""><span>Privacidad</span></a>
            </div>
        </div>

        <div>
            <p className='copyright'>Copyright 2019 SA LA NACION Todos los derechos reservados</p>
        </div>
        </section>
    </>
  )
}

export default Footer