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
      <About aboutContent="I specialise in Front-End Web Development and currently study Computer Science in the last year of a BSc degree. I enjoy challenging myself to create interactive applications / websites for both my own learning and freelance clients. I have 4 years of web development experience with a local Search Engine Optimisation agency, now I am looking to expand my career deeper into web development." />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
  }


export default App;
