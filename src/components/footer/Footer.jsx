import React from 'react';
import style from './Footer.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.FooterContainer}>
      <div className={style.iconsContainer}>
        <a href='https://github.com/RonalReds' target='_blank' rel="noopener noreferrer">
          <FaGithub className={style.githubIcon} alt="Icono de Github"/>
        </a>
        <a href='https://www.linkedin.com/in/ronal-rojas-b78120267' target='_blank' rel="noopener noreferrer">
          <FaLinkedin className={style.linkIcon} alt="Icono de Linkedin"/>
        </a>
      </div>
      <p>Desarrollado por Ronal Rojas.</p>
    </div>
  )
}

export default Footer;
