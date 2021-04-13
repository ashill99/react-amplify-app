import React from 'react';
import adampic from '../images/adampic.png'
import { FaLinkedin, FaMediumM, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

function Home() {

return (
    <div className="Home">
        <h1 className="main-heading">Hi, I'm Adam Shilling, a fullstack Software Engineer and Web / Mobile Developer  </h1>
        <p className="bio">London-born, New York-based. Passionate about good, clean design and building products that make people's lives better & easier</p>
        <p className="bio">Massive Manchester United fan and always eager to talk about the best pizza in NYC</p> 
        <img className="propic" src={adampic} alt="Adam Shilling" />
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/adamcshilling/">
                <FaLinkedin className="social-icon"/>
            </a>
            <a href="https://github.com/ashill99">
                <FaGithub className="social-icon"/>
            </a>
            <a href="https://admshng.medium.com/">
                <FaMediumM className="social-icon"/>
            </a>
            <a href="mailto:adamshilling99@gmail.com">
                <HiOutlineMail className="social-icon"/>
            </a>
        </div>
    </div>
)
}
export default Home 