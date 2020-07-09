import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

import './footer.section.scss'

const Footer = () => (
    <footer>
        <a href="https://www.linkedin.com/in/callum-fanshawe-154b85136/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a><a href="https://github.com/C7LF" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a><a href="https://www.instagram.com/cal.7_" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a><a href="https://twitter.com/c7lf_" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
    </footer>
)

export default Footer