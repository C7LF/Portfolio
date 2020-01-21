import React from 'react';
import './App.css';
import './inc/css/bootstrap.min.css';
import './inc/css/font.css';
import Top from './components/top.js';
import About from './components/about.js'
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';


function App() {

  document.title = 'C7 Dev.';
    
  return (
    <div className="App">
      <Top />
      <About aboutContent="I’m a full stack developer based in the United Kingdom, currently working at Auto Trader UK as a Front-End Developer. I recently graduated with a First-class honours in Computer Science. I’m passionate about improving my skills as a software developer by challenging myself with a variety of projects." />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
  }


export default App;
