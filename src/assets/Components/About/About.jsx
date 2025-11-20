import React from 'react'
import './About.css';
import aboutme from '../../../assets/aboutme.webp';
import human from '../../../assets/human.jpg'


const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src={aboutme} alt='Illustration about me'/> */}
        </div>

<div className="about-sections">
    <div className="about-right">
        <div className="para">
            {/* <p>Enhanced user interface content using HTML and managed backend database tasks with SQL Server. Currently upskilling in React, SQL, and front-end development with a strong focus on building responsive and user-friendly interfaces. Experienced in using Visual Studio Code to implement feature enhancements and streamline development workflows.</p> */}
            <p>I have graduated in 2018 with a degree in Information Science & Engineering. Enhanced user interface content using HTML and managed backend database tasks with SQL Server. 
                <br/><br/>Currently upskilling my skills in React, SQL, and front-end development with a strong focus on building responsive and user-friendly interfaces. 
                I take ownership of my work, adapt quickly to new technologies, and enjoy solving problems by breaking them into simple, practical solutions. 
                <br/><br/>My experience across development and operations helps me understand both technical requirements and user expectations. 
                I’m passionate about continuous learning, improving workflows, and contributing to meaningful projects.</p>
        </div>
        </div>
        </div>
        </div>
        
  );
}

export default About;
