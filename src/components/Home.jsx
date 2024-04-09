import React from 'react'
import './home.css'

const Home = () => {
  return (
    <>

        <div className='homeTitle'>
            <h2>Cuándo se podrá ver un eclipse solar total en Florida</h2>
            
        </div>

        <div className='eclipseNew'>
            <p>El fenómeno astronómico del 8 de abril mantuvo entusiasmados a los estadounidenses; más de 30 millones de personas lo presenciaron en vivo; el próximo evento tendrá lugar en agosto de 2045</p>
            <p style={{fontSize:'0.9em', color:'grey'}}>8 de abril de 2024 17:56</p>
            <img className='eclipseImage' src="../images/eclipse.png" alt="eclipse" />
            <p>Millones de personas en todo Estados Unidos vivieron en primera persona el eclipse solar total del 8 de abril de 2024</p>
            <p className='eclipseAuthor'>Foto de Rick Meyers en Unsplash</p>
        </div>
        
        <div className='publicity'>
            <h4>PUBLICIDAD</h4>
        </div>

    </>
  )
}

export default Home