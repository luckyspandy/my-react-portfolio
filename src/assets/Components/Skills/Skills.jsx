import React from 'react'
// import './Skills.css'
import './Skills1.css'
import html from '../../../assets/HTML.png'
import css from '../../../assets/CSS.png'
import js from '../../../assets/JS.png'
import react from '../../../assets/React.png'
import sql from '../../../assets/SQL.png'

const Skills = () => {
  return (
    <div id='skills'>
      <h1 className='lists'>Skills</h1>
            <div className="about-skills">

            <div className="about-skill">
                <img src={html} alt='HTML'/>
                <p>HTML</p>
                </div>

            <div className="about-skill">
                <img src={css} alt='CSS'/>
                <p>CSS</p>
                </div>

            <div className="about-skill">
                <img src={js} alt='JS'/>
                <p>JS</p>
                </div>

            <div className="about-skill">
                <img src={react} alt='React'/>
                <p>React JS</p>
                </div>

             <div className="about-skill">
                <img src={sql} alt='SQL'/>
                <p>SQL Server</p>
                </div>
</div>


      <div className="about-achievements">
        <div className="about-achievement">
        
            <h1>3+</h1>
            <p>years of experience</p>
        </div>
          <div className="separator"></div>
        <div className="about-achievement">
            <h1>1</h1>
            <p>Projects done</p>
        </div>
          <div className="separator"></div>

        <div className="about-achievement">
            <h1>1</h1>
            <p>Internship</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
