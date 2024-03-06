import React, { forwardRef, useState } from 'react';
import style from './Home.module.css';
import image from '../../assets/image/foto.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useInterval from '../../utils/useInterval';

const Home = forwardRef((props, ref) => {

  const text = '¡Plasmando tus ideas en la Web!';
  const [index, setIndex] = useState(0);
  /* const [back, setBack] = useState(false); */


  useInterval(() => {
    if (index < text.length/*  && !back */) {
      setIndex(prev => prev + 1)
    } /* else {
      setBack(true)
      setIndex(prev => prev - 1)
      if (index === 1) {
        setBack(false)
      }
    } */
  }, 200)

  

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center'})
}

  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <p className={style.tex1}>Hola mi nombre es</p>
          <h1 className={style.title}>Ronal Rojas</h1>
          <p className={style.Stack}>Soy Full Stack Developer
          y me he formado para desarrollar tus páginas Webs.</p>
        
        <h3 className={style.boxTex2}>{text.slice(0, index)}</h3>
        <h4 className={style.btnContact} onClick={() => handleClick(ref)}>Contacto</h4>
      </div>
      <div className={style.imageContainer}>
        <img src={image} alt="foto" className={style.image} />
        <div className={style.iconContainer}>
        <a href="https://github.com/RonalReds" target="_blank" rel="noopener noreferrer">
            <FaGithub className={style.githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/ronal-rojas-b78120267" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={style.linkedinIcon} />
          </a>
        </div>
      </div>
    </div>
  );
})

export default Home;
