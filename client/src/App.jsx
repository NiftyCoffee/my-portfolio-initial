import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/Logo.jsx';
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import React, { useEffect } from 'react';
import { initializeFullPageScroll } from './fullPageSetup';


function App() {
  
  return (
    <>
      <Logo />
      <NavBar />
      <div id="site-components">
        <section>
          <div className="content"><Home /></div>
        </section>
        <section>
          <div className="content"><About /></div>
        </section>
        <section>
          <div className="content"><Projects /></div>
        </section>
        <section>
          <div className="content"><Contact /></div>
        </section>
      </div>
    </>
  )
}

export default App
