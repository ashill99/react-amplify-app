import React from 'react';
import mainpageHeat from '../../images/mainpageHeat.png'
import heatmap from '../../images/heatmap.png'
import restpage from '../../images/restpage.png'

function Heat() {

return (
    <div className="Heat">
        <h1 className="project-title">hEat</h1>
        <div className="project-text">
            <p >A mobile app that displays crowdsourced restaurants and bars in NYC with heat lamps based on user location and proximity</p>
            <ul>
                <li>Built with React Native front-end and Rails back-end</li>
                <li>Integrated with Google Maps API for geotracking </li>
            </ul>
        </div>
            <ul className="phone-screenshots">
                <iframe className="youtube-vid" height="315" src="https://www.youtube.com/embed/4hSeyJ6l4og" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img className="ios-screenshot" src={mainpageHeat} alt="home page hEat" />
                <img className="ios-screenshot" src={heatmap} alt="heat map"/>
                <img className="ios-screenshot" src={restpage} alt="restaurant page"/>
            </ul>
    </div>
)
}
export default Heat 