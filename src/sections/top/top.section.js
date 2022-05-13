import React from 'react'
import { Parallax } from 'react-parallax'
import Blink from '../../components/blink/blink.component'

import { Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import AnchorLink from "react-anchor-link-smooth-scroll";

import './top.section.scss'

const Top = ({
    image
}) => {
    const classname = 'react-parallax'

    return (
        <>
            <Parallax
                blur={0}
                bgImage={image}
                bgImageAlt="mountains"
                strength={900}
            >
                <div className={`${classname}__top`}>
                    <Container>
                        <h1 className={`${classname}__name`}>Callum<br />Fanshawe</h1>
                        <span className={`${classname}__sub-title`}>Software Developer<Blink text="_" /></span>
                        <div className={`${classname}__contact`}>
                            <FontAwesomeIcon icon={faEnvelope} /> <a className='alink alink-light' href="mailto:info@c7-dev.co.uk">info@c7-dev.co.uk</a>
                        </div>
                    </Container>
                    <div className="more">
                        <AnchorLink href="#about" className="ccr">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </AnchorLink>
                    </div>
                </div>
            </Parallax>
        </>
    )
}
export default Top