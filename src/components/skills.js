import React from 'react';
import Fade from 'react-reveal/Fade';

class Skills extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Fade top>
          <div className="blocksections">
            <h2>Skills</h2>
            <p className="small">What I can do</p>
            <br />
            <div className="row">
              <div className="col-md-4">
                <img src={require('../inc/img/code-icon.png')} width="50px" alt="code icon"/>
                <h3>Languages</h3>
                <ul className="custom-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>SQL</li>
                  <li>ASP.NET w/ C#</li>
                </ul>
              </div>
              <div className="col-md-4">
                <img src={require('../inc/img/tools-icon.png')} width="50px" alt="tools icon"/>
			          <h3>Tools</h3>
                <ul className="custom-list tools">
                  <li>WordPress <small> + Other CMS's</small></li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>PHPMyAdmin</li>
                  <li>Git <small> + Version Control</small></li>
                  <li>React</li>
                  <li>MongoDB</li>
				          <li>Node.js</li>
				          <li>Express</li>
				          <li>SCSS</li>
                  <li>MS SQL Server</li>
                </ul>
              </div> 
              <div className="col-md-4">
                <img src={require('../inc/img/icon-other.png')} width="50px" alt="other icon"/>
                <h3>Other</h3>
                <ul className="custom-list other">
                  <li>Search Engine Optimisation</li>
                  <li>Digital Marketing</li>
                  <li>Graphic Design</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
          </div>
          </Fade>
        </div>  
      </>
    )
  }
}

export default Skills;
