import React, { useState } from 'react'
import './Navbar.css';
import picture1 from '../../../assets/picture1.webp';
import  {Menu, X} from 'lucide-react';

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  
  // const handleLinkClick = (section) => {
  //   setMenu(section);
  //   setIsOpen(false); // closes menu on mobile after clicking
  // };

  return (
    <div className='navbar'>
      <div><h1 className='name'>Spandana</h1>
      </div>

    {/* <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>  
    {isOpen && (  */}
      {/* <ul className={`nav-menu ${isOpen ? 'open' : ''}`}> */}
        <ul className="nav-menu">
        <li><a className={`anchorlink ${menu === "home" ? "active" : ""}`}
            href="#home" onClick={() => { setMenu("home")}}>Home</a></li>
        <li><a className={`anchorlink ${menu === "about" ? "active" : ""}`}
            href="#about" onClick={() => { setMenu("about")}}>About me</a></li>
        <li><a className={`anchorlink ${menu === "skills" ? "active" : ""}`}
            href="#skills" onClick={() => { setMenu("skills") }}>Skills</a></li>
        <li><a className={`anchorlink ${menu === "contact" ? "active" : ""}`}
            href="#contact" onClick={() => { setMenu("contact") }}>Contact</a></li>

      </ul>
    
      {/* <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div> */}

    </div>
  );
};
export default Navbar;
