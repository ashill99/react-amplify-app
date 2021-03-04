import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

  return (
    <div className="nav-bar">
    <div className="nav-top">
        <h2>Adam Shilling</h2>
        <p>Fullstack Developer</p>
    </div>
    <div className="nav-icons">
        <a href="https://github.com/ashill99"> Github </a>
        <a href="https://www.linkedin.com/in/adamcshilling/">LinkedIn </a>
        <a href="https://admshng.medium.com/">Medium </a>
          </div>
        <div className="nav-links">
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/projects" className="link">Projects</Link></li>
        </div>

  </div>
  )
}