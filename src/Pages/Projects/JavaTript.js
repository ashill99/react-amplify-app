import React from 'react';
import javatriptHome from '../../images/javatriptHome.png'
import javatriptTwo from '../../images/javatriptTwo.png'

function JavaTript() {

return (
    <div className="JavaTript">
        <h1 className="project-title">JavaTript</h1>
        <div className="project-text">
            <p >An Instagram-style photo journal that allows users to upload pictures from trips they have taken to a visual map, have them marked on the map with pins and allows users to like and comment on pictures </p>
            <ul>
                <li>Built with Vanilla JavaScript front-end and Rails back-end</li>
                <li>Uses Mapbox API & Geocoder gem for map and markers </li>
            </ul>
        </div>
        <ul>
        <iframe className="youtube-vid" width="560" height="315" src="https://www.youtube.com/embed/TT1q198Wv80" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p></p>
            <img className="screenshots" src={javatriptHome} alt="JavaTript Home" />
            <img className="screenshots" src={javatriptTwo} alt ="JavaTript Main" />
        </ul>
    </div>
)
}
export default JavaTript 