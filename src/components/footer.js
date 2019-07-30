import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer> 
          <div class="text-center">
            <a href="https://www.linkedin.com/in/callum-fanshawe-154b85136/" target="_blank"><i class="fab fa-linkedin-in"></i></a><a href="https://github.com/C7LF" target="_blank"><i class="fab fa-github"></i></a><a href="https://www.instagram.com/cal.7_" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://twitter.com/c7lf_" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
