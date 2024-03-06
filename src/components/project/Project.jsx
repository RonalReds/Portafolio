import React, { forwardRef } from 'react';
import style from './Project.module.css';
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = forwardRef((props, ref)=> {

  const projects = [
    { title: "Proyecto Destacado", name: 'WeDevelop', description: "Es una aplicación donde el usuario puede obtener una cotización para el diseño de su página web. Puede realizar pagos por el servicio y ver el avance de su proyecto. La app cuenta con un dashboard de administrador y chat interactivo.", image: 'https://i.ibb.co/PxWhnbW/weDevelo.png', skills: ["React", "Redux", "NodeJS", "Express", "MongoDB", "SCRUM"],  url: 'https://wedevelop.vercel.app/', repositories: 'https://github.com/Freetzen/WeDevelop'},
    
    { title: "Proyecto Destacado", name: 'Pokemon App', description: "Es una SPA basada en la API de pokémon. Cuenta con un formulario controlado y las validaciones esta en JavaScript. Por medio de este el usuario puede crear nuevos y mejores pokemones. También puede realizar filtros y búsquedas por nombres.", image: 'https://i.ibb.co/DGVdhn3/Pokemon.png', skills: ["React", "Redux", "NodeJS", "Express", "Sequelize"], url: 'https://wedevelop.vercel.app/', repositories: 'https://github.com/RonalReds/PI-Pokemon' },

    {title: "Proyecto Destacado", name: 'App de Rick and Morty', description:"Es una SPA donde el usuario tiene que loguearse para poder ingresar. Puede obtener más de 800 cards de los distintos personajes de la serie. Puede realizar búsquedas por ID, filtrarlos por genero y guardar sus favoritos.", image: 'https://i.ibb.co/xgy2TjB/Rick.png', skills: ["React", "Redux", "NodeJS", "Express", "Sequelize"], url: 'https://wedevelop.vercel.app/', repositories: 'https://github.com/RonalReds/rick_and_morty-Ft45a' }
  ]
  


  return (
    <div className={style.container} ref={ref}>
            <h3>Proyectos</h3>
          <p>//Mira algunos de mis proyectos más recientes:</p>
          <div className={style.projectTo}>
          {projects.map((project, index) => (
            <div key={index} className={style.containerProject}>
                  <span>{project.title}</span>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
              <img src={project.image} alt='imagen' className={style.imageProyect}/>
              <ul>
                {project.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul> 
              <a href={project.repositories} target='blank'>
                  <FaGithub className={style.githubIcon}/>
              </a>
              <a href={project.url} target='blank'>
                  <HiOutlineExternalLink className={style.linkIcon}/>
              </a>
             </div>
          ))}       
          </div>
          
    </div>
  )
})

export default Project