import React from 'react';
import content from './Items/Content_data';

const About = () => {
    console.log(content);
    return (
        <div className = "about-div">
            <div className = "about">{content[0]} {content[1]}</div>
        </div>
    )
}

export default About;