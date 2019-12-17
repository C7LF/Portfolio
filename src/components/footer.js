import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer> 
          <div class="text-center">
            <a href="https://www.linkedin.com/in/callum-fanshawe-154b85136/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a><a href="https://github.com/C7LF" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><a href="https://www.instagram.com/cal.7_" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a><a href="https://twitter.com/c7lf_" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
