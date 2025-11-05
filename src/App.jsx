import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import About from './assets/Components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './assets/Components/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';
import Skills from './assets/Components/Skills/Skills';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <div className=' main-content'>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
    {/* <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/> */}
    </>
  )
}

export default App;
