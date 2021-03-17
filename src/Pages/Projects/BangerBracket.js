import React from 'react';
import bangerHome from '../../images/bangerHome.png'
import bangerCharli from '../../images/bangerCharli.png'
import bangerWinner from '../../images/bangerWinner.png'
import bangerBrackets from '../../images/bangerBrackets.png'

function BangerBracket() {

return (
    <div className="BangerBracket">
        <h1 className="project-title">Banger Bracket</h1>
        <div className="project-text">
            <p >An interactive game that allows users to pick songs and have them compete against each other in ‘March-Madness’ style bracket format </p>
            <ul>
                <li>Built with React front-end and Rails back-end</li>
                <li>Uses Spotify API for near-unlimited song-choice </li>
            </ul>
        </div>
        <ul>
        <iframe className="youtube-vid" width="560" height="315" src="https://www.youtube.com/embed/LPXEmNxCw68" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img className="screenshots" src={bangerHome} alt="JavaTript Home" />
        <img className="screenshots" src={bangerCharli} alt="JavaTript Home" />
        <img className="screenshots" src={bangerWinner} alt="JavaTript Home" />
        <img className="screenshots" src={bangerBrackets} alt="JavaTript Home" />

        </ul>
    </div>
)
}
export default BangerBracket 