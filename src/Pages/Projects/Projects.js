import React from 'react';
import BangerBracket from './BangerBracket';
import Heat from './Heat'
import JavaTript from './JavaTript'


function Projects() {

return (
    <div className="Projects">
        {/* <h1 className="main-heading">Projects</h1> */}
        <ul>
            <Heat />
            <BangerBracket />
            <JavaTript />
        </ul>
    </div>
)
}
export default Projects 