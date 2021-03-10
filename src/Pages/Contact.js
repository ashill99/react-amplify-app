import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


function Contact() {

return (
    <div className="Contact">
    <h1 className="main-heading">Contact</h1>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/adamcshilling/">
                <FaLinkedin className="social-icon"/>
            </a>
            <a href="https://github.com/ashill99">
                <FaGithub className="social-icon"/>
            </a>
            <a href="mailto:adamshilling99@gmail.com">
                <HiOutlineMail className="social-icon"/>
            </a>
        </div>

    </div>
)
}
export default Contact 