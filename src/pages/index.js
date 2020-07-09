import React from "react"

import mountains from '../images/mountains.jpg'

import Top from '../sections/top/top.section'
import About from '../sections/about/about.section'
import Skills from '../sections/skills/skills.section'
import Projects from '../sections/projects/projects.section'
import Footer from '../sections/footer/footer.section'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="C7 Dev - Software Development" description="I’m a software developer based in the United Kingdom, passionate about all things tech and tea!" />
    <Top image={mountains} />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
