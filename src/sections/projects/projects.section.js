import React from 'react'

import { Container } from '@material-ui/core'

import Project from '../../components/project/project.component'

import './projects.section.scss'

const projectData = [
    {
        "id": "1",
        "title": "The Green Camping Company",
        "subtitle": "SPA Promoting Sustainability through Tent Rentals",
        "description": "A single page application built in React, Typescript and Styled Components using SSR (Next.js). The applications uses the serverless architecture with Node and Netlify Lambda functions to act a proxy between WordPress REST API and the front end.",
        "image": "green-camping-company.jpg",
        "tags": ["React", "TypeScript", "Next.js", "CSS", "Node", "WordPress REST API", "Serverless Lambda Functions", "Netlify"],
        "weblink": "http://www.thegreencampingcompany.com/",
        "github": ""
    },
    {
        "id": "2",
        "title": "Call Log Portal",
        "subtitle": "Web application to fetch and display call SIP call data",
        "description": "Call logging application built using the .Net stack to retrieve customer call log data from a third party via SFTP, customers are able to login to the portal and view their call data in a presentable format via graphs, tables and more.",
        "image": "advertel-portal.jpg",
        "tags": [".Net", "C#", "MVC", "JavaScript", "CSS", "SSH.Net", "SQL", "Microsoft Azure"],
        "weblink": "",
        "github": "https://github.com/C7LF/call-log-portal"
    },
    {
        "id": "3",
        "title": "Higher Education Portal",
        "subtitle": "Higher Education Computing App for Chesterfield College",
        "description": "During university, I was tasked with creating a portal for Higher Education computing students in which they could share thoughts through a group chat, forum and leave course reviews. Admins could also login to a custom CMS which allows them to moderate reviews and add, edit and delete new pages and blog posts.",
        "image": "hesite.jpg",
        "tags": [".NET", "C#", "CSS", "HTML", "MSSQL", "Azure"],
        "weblink": "",
        "github": "https://github.com/C7LF/HE-Site"

    },
    {
        "id": "4",
        "title": "Wellness Nutrition Plus",
        "subtitle": "Nutrition Tips and eCommerce Website",
        "description": "The client wanted a website to provide users with tips, facts and information on everything relating to nutrition. The site uses WordPress as a CMS along with WooCommerce, allowing users to purchase products from the site.",
        "image": "wellnesssite.jpg",
        "tags": ["WordPress", "PHP", "eCommerce", "CSS", "HTML", "SEO"],
        "weblink": "https://wellnessnutritionplus.co.uk/",
        "github": ""
    }
]
const Projects = () => (
    <Container>
        <div className="projects__title">
            <h2 className="section_heading">Projects</h2>
            <p>Some of my Recent Work</p>
        </div>
        <div className="projects__all">
            {
                projectData.map((item, index) => (
                    <Project
                        key={index}
                        id={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        image={item.image}
                        tags={item.tags}
                        weblink={item.weblink}
                        github={item.github}
                    />
                ))
            }
        </div>
        <div className="projects__text">
            <p>More on the way! <em>Want to find out more?</em> <a className="alink" href="mailto:info@c7-dev.co.uk">Email me</a></p>
        </div>
    </Container>
)

export default Projects