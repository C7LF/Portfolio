import React from 'react'

import PImage from './pimage'

import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import './project.scss'

const Project = ({
    id,
    title,
    subtitle,
    description,
    image,
    tags,
    weblink,
    github
}) => {
    const className = 'project'

    const stringTags = tags.map((item, index) => (
        <li key={index}>{item}</li>
    ))

    const altClass = (id % 2 === 0) ? '' : ` ${className}__item-alt`

    return (
        <>
            <Fade left>
                <div className={`${className}__item${altClass}`}>
                    <div className={`${className}__detail`}>
                        <h3>{title}</h3>
                        <span className='small'>{subtitle}</span>
                        <div className={`${className}__desc`}>
                            <p>{description}</p>
                        </div>
                        <div className={`${className}__technologies`}>
                            <ul>
                                {stringTags}
                            </ul>
                        </div>
                        {github && (<Button variant="outlined" color="default" href={github}>View Code</Button>)}
                        {weblink && (<Button variant="outlined" color="primary" href={weblink}>Visit</Button>)}
                    </div>
                    <div className={`${className}__image`}>
                        <PImage alt={title} filename={image} />
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Project