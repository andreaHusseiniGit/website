import React from 'react';
import './App.css';
import TopMenu from './TopMenu.js';
import AboutMe from './AboutMe.js';
import HomePage from './HomePage.js';
import Particles from 'react-particles-js';
import particleParams from './ParticleParams.js'
import Experience from './Experience';
import Skills from './Skills.js';
import Footer from './Footer.js';
import Projects from './Projects.js';

class App extends React.Component {
  render() {
    return (<>
      <Particles className='particles'
        params={particleParams}
        style={{ backgroundColor: 'white' }} />
      <TopMenu />
      <HomePage />
      <AboutMe />
      <hr style={{ border: '1px solid black', width: '90%', opacity: '80%' }}></hr>
      <Experience />
      <hr style={{ border: '1px solid black', width: '90%', opacity: '80%' }}></hr>
      <Skills />
      <hr style={{ border: '1px solid black', width: '90%', opacity: '80%' }}></hr>
      <Projects />
      <hr style={{ border: '1px solid black', width: '90%', opacity: '80%' }}></hr>
      <Footer />
    </>
    )
  }
}

export default App;
