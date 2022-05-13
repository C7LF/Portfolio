import React from 'react'

import { Container } from '@material-ui/core'
import Emoji from '../../components/emoji/emoji.component'

import './about.section.scss'

const About = () => (
    <>
        <div className="about" id="about">
            <Container>
                <h2 className='hline hline-white'>About</h2>
                <p className="light">I’m a full stack developer based in the United Kingdom currently working as a front end engineer at Green Flag. I’m passionate about improving my skills as a software developer by challenging myself with a variety of projects.</p>
                <a href="https://blog.c7-dev.co.uk" className="alink alink-light">Check out my blog!</a> <Emoji label="rocket" symbol="🚀"/>
            </Container>
        </div>
    </>
)

export default About