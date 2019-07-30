import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class Top extends React.Component {
  render() {
    return (
      <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('../inc/img/mountains.jpg')}
            bgImageAlt="mountains"
            strength={900}
        >
                <div className="top">
                <div className="container">
                  <div className="col">
                    <div className="headline">
                      <h1>Callum<br />Fanshawe</h1>
                    </div>
                    <div className="smalldev">
                      <p>Front-End Web Developer<span class="blink">_</span></p>
                    </div>
                    <div className="contact">
                      <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@c7-dev.co.uk"> &nbsp;info@c7-dev.co.uk</a>
                    </div>
                  </div>
                </div>
                <div className="bottommore">
                  <a href="#first" className="ccr"><i className="fas fa-chevron-down"></i></a>
                </div>
                </div>


        </Parallax>
 
        
    </div>
    
    )
  }
}

export default Top;
