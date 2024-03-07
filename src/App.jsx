import './App.css'
import Home from './components/home/Home'
import Project from './components/project/Project'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skill from './components/skill/Skill'
import Footer from './components/footer/Footer'
import { useRef } from 'react'





function App() {

  const aboutRef  = useRef(null)
  const skillsRef  = useRef(null)
  const projectRef  = useRef(null)
  const contactRef = useRef(null)
  

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center'})
}


  return (
    <>
      <div className='nav'>
          <span className='btn-about' onClick={() => handleClick(aboutRef)} name=''>SOBRE MI</span>
          <span className='btn-skills' onClick={() => handleClick(skillsRef)}>HABILIDADES</span>
          <span className='btn-project' onClick={() => handleClick(projectRef)}>PROJECTOS</span>
          <span className='btn-contact' onClick={() => handleClick(contactRef)}>CONTACTO</span>
    </div>
    <Home ref={contactRef} />
    <About ref={aboutRef } />
    <Skill ref={skillsRef }/>
    <Project ref={projectRef }/>
    <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
