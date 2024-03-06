import React, { forwardRef } from 'react';
import style from './About.module.css';


const About = forwardRef((props, ref) => {
  return (
    <div className={style.container} ref={ref}>
      <div className={style.textContainer}>
        <h3>Sobre mi</h3>
        <h2>Hola, de nuevo. ¡ Te invito a explorar mi portafolio!</h2>
        <p>Siempre he estado en contacto con nuevas tecnologías. Mi trabajo en los últimos 4 años con sistemas de gestión me llevo a toparme con el mundo de la programación. Desde entonces el interés y el entusiasmo por el desarrollo web no se ha detenido solo se ha ido puliendo y perfeccionando.</p>
        <p>Puedo hacer que tus ideas, proyectos y negocios pasen de estar en tu mente a estar visibles en toda la web. Mi experiencia práctica académica en distintos proyectos son un aval del potencial y el aporte que puedo generar en tus proyectos.</p>
      </div>
    </div>
  )
})

export default About;