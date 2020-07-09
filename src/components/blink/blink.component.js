import React from 'react'

import './blink.scss'

const Blink = ({text}) => text && (
    <span className="blink">{text}</span>
)

export default Blink