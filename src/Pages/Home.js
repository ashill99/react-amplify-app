import React from 'react';
import adampic from '../images/adampic.png'

function Home() {

return (
    <div className="Home">
        <h1 className="main-heading">Hi, I'm Adam Shilling, a fullstack Software Engineer and Web / Mobile Developer  </h1>
        <p>London-born, New York-based. Passionate about good, clean design and building products that help make people's lives easier </p>
        <p>Massive Manchester United fan and always eager to tell you the best pizza in NYC</p> 
        <img className="propic" src={adampic} alt="Adam Shilling" />
    </div>
)
}
export default Home 