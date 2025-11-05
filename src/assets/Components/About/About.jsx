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
            <p>Enhanced user interface content using HTML and managed backend database tasks with SQL Server. Currently upskilling in React, SQL, and front-end development with a strong focus on building responsive and user-friendly interfaces. Experienced in using Visual Studio Code to implement feature enhancements and streamline development workflows.</p>
        </div>
        </div>
        </div>
        </div>
        
  );
}

export default About;
