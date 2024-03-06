import React, { forwardRef } from 'react';
import style from './Skill.module.css';
import imgReact from '../../assets/image/react.png';
import imgCSS from '../../assets/image/css.png';
import imgGit from '../../assets/image/git.png';
import imgHTML from '../../assets/image/html.png';
import imgJS from '../../assets/image/js.png';
import imgMongo from '../../assets/image/mongo.png';
import imgNodeJS from '../../assets/image/nodeJS.png';
import imgPostgres from '../../assets/image/postgres.png';
import imgRedux from '../../assets/image/redux.png';

const Skill = forwardRef((props, ref) => {

    const skills = [
        { image: imgReact, name: 'REACT' },
        { image: imgRedux, name: 'REDUX' },
        { image: imgCSS, name: 'CSS' },
        { image: imgGit, name: 'GIT' },
        { image: imgHTML, name: 'HTML' },
        { image: imgJS, name: 'JAVASCRIPT' },
        { image: imgMongo, name: 'MONGO' },
        { image: imgNodeJS, name: 'NODEJS' },
        { image: imgPostgres, name: 'POSTGRE SQL' },
    ]



  return (
          <div className={style.container} ref={ref}>
            <h3>Habilidades</h3>
          <p>//Estas son las tecnologías con las que he trabajado:</p>
          <div className={style.containerMap}>
          {skills.map((skill, index) => (
                  <div key={index} className={style.containerSkill}>
                      <img src={skill.image} alt={skill.name} className={style.imageSkill}/>
                      <span>{skill.name}</span>
                  </div>
              ))}
          </div>
              
          </div>
  )
})

export default Skill