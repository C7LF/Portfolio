import React from 'react';
import { Parallax } from 'react-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'
//import Nav from './nav'
import BlinkLabel from './blink';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

class Top extends React.Component {
  render() {
    return (
      <>
        <Parallax
            blur={0}
            bgImage={require('../inc/img/mountains.jpg')}
            bgImageAlt="mountains"
            strength={900}
        >
          
        {/* <Nav /> */}
              <div className="top">
                <div className="container">
                  <div className="col">
                    <div className="headline">
                      <h1>Callum<br />Fanshawe</h1>
                    </div>
                    <div className="smalldev">
                      <p>Graduate Software Developer<BlinkLabel label='_' /></p>
                    </div>
                    <div className="contact">
                      <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@c7-dev.co.uk"> &nbsp;info@c7-dev.co.uk</a>
                    </div>
                  </div>
                </div>
                <div className="bottommore">
                  <AnchorLink className="ccr" href='#first'>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </AnchorLink>
                </div>
              </div>
        </Parallax>
    </>
    )
  }
}

export default Top;
