import React from 'react';
import Top from './components/top';
import About from './components/about'
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NotFound from './components/error'

import './App.css';
import './inc/css/bootstrap.min.css';
import './inc/css/font.css';


export function MainContent() {
  return (
    <>
      <Top />
      <About aboutContent="I’m a full stack developer based in the United Kingdom, currently working at Auto Trader UK as a Front-End Developer. I recently graduated with a First-class honours in Computer Science. I’m passionate about improving my skills as a software developer by challenging myself with a variety of projects." />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainContent} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

