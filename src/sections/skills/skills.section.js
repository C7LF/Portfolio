import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Container } from '@material-ui/core';
import Emoji from '../../components/emoji/emoji.component'

import Fade from 'react-reveal/Fade';

import './skills.section.scss'


const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      code: file(relativePath: { eq: "code-icon.png" }) {
        childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
      }
      tools: file(relativePath: { eq: "tools-icon.png" }) {
        childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
      }
      other: file(relativePath: { eq: "icon-other.png" }) {
        childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
      }
    }
  `)

  return (
    <Fade top>
      <Container>
        <div className="blocksections">
          <h2 className="section_heading">Skills</h2>
          <p>What I can do</p>
          <div className="grid-col">
            <div className="col">
              <Img
                fixed={data.code.childImageSharp.fixed}
                alt="Code icon"
                className="skills-icon"
              />

              <span className="skills-heading">Languages</span>
              <ul className="custom-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL / NoSQL</li>
                <li>PHP</li>
                <li>.Net</li>
              </ul>
            </div>
            <div className="col">
              <Img
                fixed={data.tools.childImageSharp.fixed}
                alt="Code icon"
                className="skills-icon"
              />
              <span className="skills-heading">Tools &amp; Frameworks</span>
              <ul className="custom-list tools">
                <li>Angular</li>
                <li>React</li>
                <li>Node</li>
                <li>Redux</li>
                <li>SCSS</li>
                <li>MongoDB</li>
                <li>MS SQL Server</li>
                <li>MySQL</li>
                <li>Git <small> + Version Control</small></li>
                <li>WordPress <small> + Other CMS's</small></li>
              </ul>
            </div>
            <div className="col">
              <Img
                fixed={data.other.childImageSharp.fixed}
                alt="Code icon"
                className="skills-icon"
              />
              <span className="skills-heading">Other</span>
              <ul className="custom-list other">
                <li>Search Engine Optimisation</li>
                <li>Digital Marketing</li>
                <li>Graphic Design</li>
                <li>Agile Methodologies</li>
                <li>Tea Making! <Emoji label="tea" symbol="☕" /> </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Fade>
  )
}

export default Skills