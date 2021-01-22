import React from 'react'
import { BackgroundDiv, BackgroundEllipse1, BackgroundEllipse2, GlassEllipse1, GlassEllipse2, Glass } from './Background.elements';

const Background = () => {
    return (
        <BackgroundDiv>
            <BackgroundEllipse1 />
            <BackgroundEllipse2 />
            <GlassEllipse1 />
            <GlassEllipse2 />
            <Glass />
        </BackgroundDiv>
    )
}

export default Background
