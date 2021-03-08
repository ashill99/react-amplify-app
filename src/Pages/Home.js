import React from 'react';
import adampic from '../images/adampic.png'

function Home() {

return (
    <div className="Home">
        <h1>Hi, my name is Adam Shilling and I'm a fullstack Software Engineer and Web / Mobile Developer.  </h1>
        <p>London-born, New York-based. I'm passionate about building customer-facing products and services that improve efficiency and hopefully make people's lives a little easier and the world a better place. </p>
        <p>Massive Manchester United fan and always keen to tell you my current list of best tacos and pizza in NYC.</p> 
        <img className="propic" src={adampic} alt="Adam Shilling" />
    </div>
)
}
export default Home 