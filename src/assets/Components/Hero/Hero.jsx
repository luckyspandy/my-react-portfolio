import React from 'react'
import './Hero.css';
import human from '../../../assets/photo1.png';
import { FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className='hero'>
    <img src={human} className='man' />     
     <h1>Hello <span className="wave">👋</span>, I'm</h1>
     <h2><span>Spandana Suresh</span></h2>
     {/* <h1><span>I'm an Aspiring Frontend Developer</span></h1> */}
     {/* <p>Results-driven professional with over 3.5+ years of experience in operations and development, 
actively seeking a transition into a technical role. Currently upskilling my skills in React, SQL, and 
front-end development with a focus on building responsive user interfaces. Seeking an 
opportunity to leverage my problem-solving and analytical skills in a developer role. </p> */}

<p>Results-driven professional with over 3.5+ years of experience in operations and development, 
actively seeking a transition into a technical role. </p>

      <div className='hero-action'>

 <a href="#contact" className='nav-connect'>Connect with me</a>
        {/* <div className="hero-resume">  */}
        <a
          href="./Spandana-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume"> My Resume</a>
        
          {/* </div> */}

           {/* <a href={resume} target="_blank" rel="noopener noreferrer" className="hero-resume">
          <FileText size={20} /> My Resume</a> */}
</div>
    </div>
  )
}

export default Hero
